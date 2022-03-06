import { Row, Table } from "../lib/model";
import { v4 as uuidv4 } from 'uuid'



class SkillsTable extends Table {
  _new(data) {
    return new Skill(data);
  }
}

class Skill extends Row {
  constructor(data) {
    super(data)
    this.id = data.id || uuidv4()
    
    this.fill(data)
  }
}

export { Skill }
export default SkillsTable