// Classes in TS

class Vehicle {
    public drive(): void {
        console.log('we are driving')
    }
    public calling(): void {
        this.jump()
    }

    // protected
    // apenas esta classe ou filhos 
    //  desta classe podem usar este metodo
    protected shoot(): void {
        console.log('we are shooting')
    }
    // Only Vehicle are allowed to  use drive method
    private jump(): void {
        console.log('We are jumping')
    }
}

class Car extends Vehicle {
    // modificadores
    //  public private protected

    // overwrite method
    driv(): void {
        console.log('skjsfajfl')
        this.shoot()
    }
    private pupu(): void {
        console.log('skjsfajfl')
    }
}

const veiculo = new Vehicle()
const carro = new Car()

carro.driv()