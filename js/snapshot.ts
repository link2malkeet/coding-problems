class SnapshotArray {
  private snapId: number;
  private arr: Map<number, Map<number, number>>;

  constructor(n: number) {
    this.arr = new Map();
    this.snapId = 0;
    for (let i = 0; i < n; i++) {
      this.arr.set(i, new Map([[0, 0]]));
    }
  }

  set(index: number, value: number) {
    const snapArray = this.arr.get(index);
    if (snapArray) snapArray.set(this.snapId, value);
  }

  snap() {
    this.snapId++;
    return this.snapId - 1;
  }

  get(index: number, snapId: number) {
    const snapArray = this.arr.get(index);
    let closestSnapId = 0;
    if (snapArray) {
      for (const [s] of snapArray) {
        if (s > snapId) {
          break;
        }
        closestSnapId = s;
      }
      return snapArray.get(closestSnapId) || 0;
    } else {
      return 0;
    }
  }
}

const snapshot = new SnapshotArray(3);
console.log(snapshot);
snapshot.set(0, 5);
console.log(snapshot.snap());
// console.log(snapshot.snap());
snapshot.set(0, 10); // Array: [10, 0, 0]
snapshot.set(1, 7); // Array: [10, 7, 0]
snapshot.snap(); // snap_id: 1
console.log(snapshot);
console.log(snapshot.get(0, 0)); // Returns 5 (the value at index 0 at snap_id 0).get(0, 0); // Returns 5 (the value at index 0 at snap_id 0)
// console.log(snapshot.get(0, 1)); // Returns 10 (the value at index 0 at snap_id 1).get(0, 1); // Returns 10 (the value at index 0 at snap_id 1)
// console.log(snapshot.get(1, 1));
