// 观察者模式（Observer）
// 又被称为发布-订阅者模式或消息机制
// 定义了对象间的一种一对多的依赖关系，只要当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知并被自动更新，解决了主体对象与观察者之间功能的耦合，即一个对象状态改变给其他对象通知的问题


let observer_ids = 0;
let observed_ids = 0;

// 观察者类
class Observer {
    constructor() {
            this.id = observer_ids++
        }
        // 观测到变化后的处理
    update(ob) {
        console.log("观察者" + this.id + `-检测到被观察者${ob.id}变化`)
    }
}


// 被观察者列
class Observed {
    constructor() {
        this.observers = []
        this.id = observed_ids++;
    }

    // 添加观察者
    addObserver(observer) {
        this.observers.push(observer)
    }

    // 删除观察者
    removeObserver(observer) {
        this.observers = this.observers.filter(o => {
            return o.id != observer.id
        })
    }

    // 通知所有的观察者
    notify(ob) {
        this.observers.forEach(observer => {
            observer.update(ob)
        })
    }
}


let mObserved = new Observed()
let mObserver1 = new Observer()
let mObserver2 = new Observer()
let mObserved4 = new Observer()


mObserved.addObserver(mObserver1)
mObserved.addObserver(mObserver2)
mObserved.addObserver(mObserved4)

mObserved.notify({
    id: 4
})