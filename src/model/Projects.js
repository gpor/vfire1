import { Row, Table } from "../lib/model";
import { v4 as uuidv4 } from 'uuid'



class ProjectsTable extends Table {
  _new(data) {
    return new Project(data);
  }
}

class Project extends Row {
  constructor(data) {
    super(data)
    this.id = data.id || uuidv4()
    this.clientId = null
    this.employerId = null
    this.title = ''
    this.content = []
    this.fill(data)
  }
}

export { Project }
export default ProjectsTable