import { Row, Table } from "../lib/model";
import { v4 as uuidv4 } from 'uuid'



class EmployersTable extends Table {
  _new(data) {
    return new Employer(data);
  }
}

class Employer extends Row {
  constructor(data) {
    super(data)
    this.id = data.id || uuidv4()
    
    this.fill(data)
  }
}

export { Employer }
export default EmployersTable