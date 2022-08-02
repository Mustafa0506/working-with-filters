let arr = [
    {
        name: 'iskandar',
        age: 9,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'zafar',
        age: 14,
        course: {
            title: 'smm'
        }
    },
    {
        name: 'temur',
        age: 1,
        course: {
            title: 'graph'
        }
    },
    {
        name: 'sardor',
        age: 24,
        course: {
            title: 'smm'
        }
    },
    {
        name: 'timur',
        age: 19,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'aziz',
        age: 28,
        course: {
            title: 'graph'
        }
    },
    {
        name: 'ali',
        age: 26,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'mir',
        age: 17,
        course: {
            title: 'graph'
        }
    },
    {
        name: 'jonibek',
        age: 25,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'shox',
        age: 22,
        course: {
            title: 'smm'
        }
    },
    {
        name: 'shax',
        age: 68,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'mustafa',
        age: 78,
        course: {
            title: 'dev'
        }
    }
]

let courses = {
    smm: {
        count: 0,
        arr_names: [],
    },
    dev: {
        count: 0,
        arr_names: [],
    },
    graph: {
        count: 0,
        arr_names: [],
    },
}


arr.filter(item => {
    switch (item.course.title) {
        case 'smm':
            courses.smm.count++
            courses.smm.arr_names.push(item)
            break;
        case 'dev':
            courses.dev.count++
            courses.dev.arr_names.push(item)
            break;
        case 'graph':
            courses.graph.count++
            courses.graph.arr_names.push(item)
            break;
    }
    
    
})

let reduseOne = arr.reduce((a,b) => {
    return a + b.age
},0)

let reduseTwo = Math.round(reduseOne/arr.length)  

console.log('Задания 1', courses);                       
console.log('Задания 2 (Сумма) =>', reduseOne);
console.log('Задания 2 (Среднее орефметическое) =>', reduseTwo);