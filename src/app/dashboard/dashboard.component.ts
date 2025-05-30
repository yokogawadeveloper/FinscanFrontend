import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isScanning: any;
  scanButtonText: string | undefined;
  constructor() { }
  
  ngOnInit(): void {
    // this.initializeRealTimeUpdates();
    // this.initializeDuplicateDetection();
  }

  ngOnDestroy(): void {
    // this.updateSubscription?.unsubscribe();
    // this.duplicateDetectionSubscription?.unsubscribe();
  }

  startFullScan(): void {
    if (this.isScanning) return;

    this.isScanning = true;
    this.scanButtonText = '⏳ Scanning...';

    // Simulate scan completion after 8 seconds
    setTimeout(() => {
      this.scanButtonText = '✅ Scan Completed';

      // Reset button after 3 seconds
      setTimeout(() => {
        this.isScanning = false;
        this.scanButtonText = '🔍 Start Full Scan';
      }, 3000);
    }, 8000);
  }
}
