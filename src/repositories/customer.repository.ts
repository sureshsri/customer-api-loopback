import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CustomerDatasourceDataSource} from '../datasources';
import {Customer, CustomerRelations} from '../models';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {
  constructor(
    @inject('datasources.customerDatasource') dataSource: CustomerDatasourceDataSource,
  ) {
    super(Customer, dataSource);
  }
}
