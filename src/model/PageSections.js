import { Row, Table } from "../lib/model";
import { v4 as uuidv4 } from 'uuid'



class PageSectionsTable extends Table {
  _new(data) {
    return new PageSection(data);
  }
}

class PageSection extends Row {
  constructor(data) {
    super(data)
    this.id = data.id || uuidv4()
    
    this.fill(data)
  }
}

export { PageSection }
export default PageSectionsTable