
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, VERSION, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'ngx-autoscroll',
  templateUrl: './autoscroll.component.html',
  styleUrls: ['./autoscroll.component.scss']
})
export class AutoscrollComponent implements OnInit, AfterViewInit {
  name = 'Angular ' + VERSION.major;
  @ViewChild('scrollframe', { static: false }) scrollFrame: ElementRef;
  @ViewChildren('item') itemElements: QueryList<any>;
  itemList: number[] = [];

  
  private itemContainer: any;
  private scrollContainer: any;
  public items = [];
  private isNearBottom = true;
 
  constructor() {

    for (var i = 0; i < 100; i++) {
      this.itemList.push(+i)
    }
  }
  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;
    this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());

    // Add a new item every 2 seconds for demo purposes
    setInterval(() => {
      this.items.push({});
    }, 2000);
  }
  scrollToTop(el) {
    el.scrollTop = 0;
  }
  private onItemElementsChanged(): void {
    if (this.isNearBottom) {
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  private isUserNearBottom(): boolean {
    const threshold = 150;
    const position = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
    const height = this.scrollContainer.scrollHeight;
    return position > height - threshold;
  }

  scrolled(event: any): void {
    this.isNearBottom = this.isUserNearBottom();
  }

  ngOnInit() {
  }
}
