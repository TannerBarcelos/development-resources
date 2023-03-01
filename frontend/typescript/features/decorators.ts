@classDecorator
class Boat {
  @propertyDecorator
  color: string = 'red'

  @propertyDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  @error('Oops the boat sank')
  pilot(@paramDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('Fast')
    } else {
      console.log('Not fast')
    }
    // throw new Error('Issue')
    // console.log('Swish')
  }
}

function paramDecorator(target: any, key: string, index: number) {
  console.log('Key: ', key)
  console.log('Index: ', index)
}

function propertyDecorator(target: any, key: string) {
  console.log('Target Object: ', target) // the prototype of the object / class
  console.log('Key: ', key) // the actual method / instance variable / property the decorator is defined on
}

// Decorator factory - function that returns a decorator
function error(errorMessage: string) {
  return function error(
    target: any,
    key: string,
    desc: PropertyDescriptor,
  ): void {
    const method = desc.value

    desc.value = function () {
      try {
        method() // no error - run the code in the function that is decorated
      } catch (error) {
        console.log(errorMessage) // if error, run the log with the error message given
      }
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

new Boat().pilot('fast')
