// Abstract
// abstract = blueprint, 設計図としてのclassになる
abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
  ){}

  abstract getSepia(): void
  getReelTime(): number {
    return 8
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ){
    // 派生クラスの場合、super()を入れる必要がある
    super(cameraMode, filter)
  }

  getSepia(): void {
    console.log('Sepia')
  }

}

const hc = new Instagram('test mode', 'test filter', 3)

