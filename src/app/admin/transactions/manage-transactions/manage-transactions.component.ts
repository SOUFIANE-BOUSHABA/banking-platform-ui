import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../core/services/transaction.service';
import { Transaction } from '../../../core/models/Transaction.model';

@Component({
  selector: 'app-manage-transactions',
  templateUrl: './manage-transactions.component.html',
})
export class ManageTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  currentPage = 1;
  pageSize = 5;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getAll().subscribe({
      next: (transactions) => (this.transactions = transactions),
      error: (err) => console.error('Failed to fetch transactions', err),
    });
  }

  approveTransaction(transactionId: number): void {
    this.transactionService.approve(transactionId).subscribe({
      next: () => this.loadTransactions(),
      error: (err) => console.error('Failed to approve transaction', err),
    });
  }

  rejectTransaction(transactionId: number): void {
    this.transactionService.reject(transactionId).subscribe({
      next: () => this.loadTransactions(),
      error: (err) => console.error('Failed to reject transaction', err),
    });
  }

  get displayedTransactions(): Transaction[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.transactions.slice(startIndex, startIndex + this.pageSize);
  }

  changePage(delta: number): void {
    const newPage = this.currentPage + delta;
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.transactions.length / this.pageSize);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.pageSize - 1, this.transactions.length);
  }
}
