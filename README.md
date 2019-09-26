# Angular Bootstrap Modal Service

This Modal Service is an implementation of NgbModal as an angular service.
A nice neatly packaged reusable bootstrap modal implementation thats easier to to maintain.
It moves the complexity of opening the modal and the processing of modal data from the component to it's own service.

## Installation

https://ng-bootstrap.github.io/#/getting-started

```bash
npm install --save @ng-bootstrap/ng-bootstrap
```

## Usage

```
import { TodoModalService } from '@app/services/todo-modal.service';

  constructor(private todoModalService: TodoModalService)

  openTodoModal() {
    this.todoModalService.openModal();
  }

```

## Contributing
Pull requests and improvement suggestions are welcome.

AppAgility Ltd
https://appagility.co.nz


## License
[MIT](https://choosealicense.com/licenses/mit/)
