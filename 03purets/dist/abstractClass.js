"use strict";
// Abstract
// abstract = blueprint, 設計図としてのclassになる
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        // 派生クラスの場合、super()を入れる必要がある
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('Sepia');
    }
}
const hc = new Instagram('test mode', 'test filter', 3);
