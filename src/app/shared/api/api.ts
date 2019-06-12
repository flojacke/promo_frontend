export * from './bookController.service';
import { BookControllerService } from './bookController.service';
export * from './catalogController.service';
import { CatalogControllerService } from './catalogController.service';
export * from './clientController.service';
import { ClientControllerService } from './clientController.service';
export * from './connectionController.service';
import { ConnectionControllerService } from './connectionController.service';
export const APIS = [BookControllerService, CatalogControllerService, ClientControllerService, ConnectionControllerService];
