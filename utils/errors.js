export class InvalidData extends Error{
    constructor (message, field){
        super(message)
        this.name = 'InvalidData'
    this.status = 400
    this.field = field
    this.response = { [field]: message }
    }
}

export class Unauthorized extends Error{
    constructor (message, field){
        super(message)
        
    }
}