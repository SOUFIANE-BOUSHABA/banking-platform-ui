import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private baseUrl = '/api/transactions';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/all`);
  }

  approve(transactionId: number): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.baseUrl}/approve/${transactionId}`, {});
  }

  reject(transactionId: number): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.baseUrl}/reject/${transactionId}`, {});
  }

  getUserTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/user-transactions`);
  }
}
