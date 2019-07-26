export default class FakeAPI {
    constructor(){
        this.init()
    }

    init(resolve, reject){

        if (!localStorage.getItem('goods')) {


            const goods = {
                "0": {
                    name: 'сыр "Чеддар"',
                    price: '300',
                    expirationDate: '20.10.2019',
                    category: '1'
                },
                "1": {
                    name: 'Йогурт',
                    price: '60',
                    expirationDate: '10.11.2019',
                    category: '1'
                },
                "2": {
                    name: 'Рис басмати, 1кг',
                    price: '120',
                    expirationDate: '20.08.2021',
                    category: '2'
                },
            }
            const categories = {
                "0": {
                    name: 'Прочее'
                },
                "1": {
                    name: 'Кисломолочные продукты'
                },
                "2": {
                    name: 'Крупы'
                },
                "3": {
                    name: 'Макаронные изделия'
                },
                "4": {
                    name: 'Растительные масла'
                }
            }
            try {
                localStorage.setItem('goods', JSON.stringify(goods));
                localStorage.setItem('categories', JSON.stringify(categories));

                if (typeof resolve === 'function') {
                    resolve('success')
                }
            }
            catch (e) {
                if (typeof reject === 'function') {
                    reject('Error in getCategories: ' + e.message);
                }
            }
        }
        else {
            if(typeof resolve === 'function') {
                resolve('success')
            }
        }
    }

    getCategories(resolve, reject) {

        try {
            const categories = JSON.parse(localStorage.getItem('categories'))

            if(typeof resolve === 'function') {
                resolve(categories)
            }
        }
        catch (e) {
            if(typeof reject === 'function') {
                reject('Error in getCategories: ' + e.message);
            }
        }
    }

    getGoods(resolve, reject) {

        try {
            const goods = JSON.parse(localStorage.getItem('goods'))

            if(typeof resolve === 'function') {
                resolve(goods)
            }
        }
        catch (e) {
            if(typeof reject === 'function') {
                reject('Error in getGoods: ' + e.message);
            }
        }

    }

    addProd(product, resolve, reject) {

        this.getGoods((goods) => {
            const id = Number(Object.keys(goods)[Object.keys(goods).length-1]) + 1;
            goods[id] = product;

            try{
                localStorage.setItem('goods', JSON.stringify(goods));

                if(typeof resolve === 'function') {
                    resolve(goods)
                }
            }
            catch (e) {
                if(typeof reject === 'function') {
                    reject('Error in addProd: ' + e.message);
                }
            }
        })

    }

    addCat(category, resolve, reject) {

        this.getCategories((cats) => {
            const id = Number(Object.keys(cats)[Object.keys(cats).length-1]) + 1;
            cats[id] = category;

            try{
                localStorage.setItem('categories', JSON.stringify(cats));

                if(typeof resolve === 'function') {
                    resolve(cats)
                }
            }
            catch (e) {
                if(typeof reject === 'function') {
                    reject('Error in addCat: ' + e.message);
                }
            }
        })

    }

    saveCat(id, category, resolve, reject) {

        this.getCategories((cats) => {

            cats[id] = category;

            try{
                localStorage.setItem('categories', JSON.stringify(cats));

                if(typeof resolve === 'function') {
                    resolve(cats)
                }
            }
            catch (e) {
                if(typeof reject === 'function') {
                    reject('Error in saveCat: ' + e.message);
                }
            }
        })

    }

    saveProd(id, product, resolve, reject) {

        this.getGoods((goods) => {

            goods[id] = product;

            try{
                localStorage.setItem('goods', JSON.stringify(goods));

                if(typeof resolve === 'function') {
                    resolve(goods)
                }
            }
            catch (e) {
                if(typeof reject === 'function') {
                    reject('Error in saveProd: ' + e.message);
                }
            }
        })

    }

    delProd(id, resolve, reject) {

        this.getGoods((goods) => {

            delete goods[id]

            try{
                localStorage.setItem('goods', JSON.stringify(goods));

                if(typeof resolve === 'function') {
                    resolve(goods)
                }
            }
            catch (e) {
                if(typeof reject === 'function') {
                    reject('Error in delProd: ' + e.message);
                }
            }
        })

    }

    delCat(id, resolve, reject) {

        this.getCategories((cats) => {

            if (Object.keys(cats).length === 1){
                if(typeof reject === 'function') {
                    reject('Последняя категория!')
                    return
                }
            }

            delete cats[id]

            try{
                localStorage.setItem('categories', JSON.stringify(cats));


                this.getGoods((goods) => {

                    const newCatId = Object.keys(cats)[0]

                    for (var key in goods) {
                        if (goods.hasOwnProperty(key)) {
                            if (goods[key].category === id) goods[key].category = newCatId
                        }
                    }

                    localStorage.setItem('goods', JSON.stringify(goods));

                    if(typeof resolve === 'function') {
                        resolve({cats, goods})
                    }

                })

            }
            catch (e) {
                if(typeof reject === 'function') {
                    reject('Error in delCat: ' + e.message);
                }
            }
        })


    }

}
