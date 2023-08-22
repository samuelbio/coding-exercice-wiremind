import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {environment} from "@environments/environment.development";
import {GithubRepository} from "@core/models/github/githubRepository.model";
import {Paginator} from "@core/models/github/paginator.model";
import {PageEvent} from "@angular/material/paginator";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  httpClient = inject(HttpClient);
  searchRepositoryByText(text: string, page?: PageEvent): Observable<Paginator<GithubRepository>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bear ${environment.token}`,
      'X-GitHub-Api-Version': environment.githubApiVersion
    });
    const params = new HttpParams()
      .set('per_page', page?.pageSize ?? 10)
      .set('q', text)
      .set('page', page?.pageIndex ?? '')
    return this.httpClient.get<Paginator<GithubRepository>>(
      `${environment.githubApiUrl}/search/repositories?q=${text}`,
      {
        headers,
        params,
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponse<Paginator<GithubRepository>>) => {
          let data = response.body as Paginator<GithubRepository>
          const link = response.headers.get('link')
          const next = this.extractNextLink(link);
          if (next) {
            data.next = next;
          }
          const previous = this.extractPreviousLink(link);
          if (previous) {
            data.previous = previous;
          }
          return data;
        })
      );
  }

  extractNextLink(link: string | null): string | null {
    if (link && link.includes(`rel=\"next\"`)) {
      const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
      const result = link.match(new RegExp(nextPattern));
      return result ? result[0] : null;
    }
    return null;
  }

  extractPreviousLink(link: string | null): string | null {
    if (link && link.includes(`rel=\"next\"`)) {
      const nextPattern = /(?<=<)([\S]*)(?=>; rel="prev")/i;
      const result = link.match(new RegExp(nextPattern));
      return result ? result[0] : null;
    }
    return null;
  }

  getDataFromUrl<T>(url: string, page?: PageEvent): Observable<Paginator<T>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bear ${environment.token}`,
      'X-GitHub-Api-Version': environment.githubApiVersion
    });
    const params = new HttpParams()
      .set('per_page', page?.pageSize ?? 10)
      .set('page', page?.pageIndex ?? '')
    return this.httpClient.get<Paginator<T>>(url,
      {
        headers,
        params,
        observe: 'response'
      })
      .pipe(map((response: HttpResponse<any>) => {
          let data = response.body as T[];
          return {items: data, total_count: 500}
      }))
  }

}
