import { Row, Table } from "../lib/model";
import { v4 as uuidv4 } from 'uuid'



class ClientsTable extends Table {
  _new(data) {
    return new Client(data);
  }
}

class Client extends Row {
  constructor(data) {
    super(data)
    this.id = data.id || uuidv4()
    
    this.fill(data)
  }
}

export { Client }
export default ClientsTable