import { Offset } from '../../type';

export class Paginations {
  //
  private offset?: Offset;

  total: number;
  count: number;
  size: number;
  page: number;
  next: Offset;
  previous: Offset;
  first: Offset;
  last: Offset;
  hasNext: boolean;
  hasPrevious: boolean;
  hasFirst: boolean;
  hasLast: boolean;

  static parse(offset?: Offset) {
    //
    return new Paginations(offset);
  }

  private constructor(offset?: Offset) {
    //
    this.offset = offset;

    this.total = 0;
    this.count = 1;
    this.size = 10;
    this.page = 1;
    this.next = { ...this.offset, offset: 0, limit: this.size };
    this.previous = { ...this.offset, offset: 0, limit: this.size };
    this.first = { ...this.offset, offset: 0, limit: this.size };
    this.last = { ...this.offset, offset: 0, limit: this.size };
    this.hasNext = false;
    this.hasPrevious = false;
    this.hasFirst = false;
    this.hasLast = false;

    this.initialize();
  }

  private initialize() {
    //
    if (!this.offset || !this.offset.limit) {
      return;
    }

    this.total = this.offset.totalCount ?? 0;
    this.count = Math.ceil(this.total / this.offset.limit) || 1;
    this.size = this.offset.limit;
    this.page = Math.ceil(this.offset.offset / this.offset.limit) + 1;
    this.next = {
      ...this.offset,
      offset: this.page < this.count ? this.offset.offset + this.size : this.offset.offset,
    };
    this.previous = {
      ...this.offset,
      offset: this.page > 1 ? this.offset.offset - this.size : this.offset.offset,
    };
    this.first = {
      ...this.offset,
      offset: 0,
    };
    this.last = {
      ...this.offset,
      offset: (this.count - 1) * this.offset.limit,
    };
    this.hasNext = this.page < this.count;
    this.hasPrevious = this.page > 1;
    this.hasFirst = this.page > 1;
    this.hasLast = this.page < this.count;
  }

  navigate(page: number) {
    //
    if (!this.offset || !this.offset.limit) {
      return <Offset>{
        offset: 0,
        limit: 10,
      };
    }

    if (page > this.count) {
      return this.last;
    }

    if (page < 1) {
      return this.first;
    }

    return <Offset>{ ...this.offset, offset: (page - 1) * this.offset.limit };
  }
}
