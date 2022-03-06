import { Row, Table } from "../lib/model";
import { v4 as uuidv4 } from 'uuid'



class ProjectsSkillsTable extends Table {
  _new(data) {
    return new ProjectSkill(data);
  }
}

class ProjectSkill extends Row {
  constructor(data) {
    super(data)
    this.id = data.id || uuidv4()
    
    this.fill(data)
  }
}

export { ProjectSkill }
export default ProjectsSkillsTable