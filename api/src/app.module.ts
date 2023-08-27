import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart_item/cart_item.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order_item/order_item.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',//'pixelpalace-db-1',
      port: 5432,
      username: 'seshuk291',
      password: '12345',
      entities: [],
      database: 'pixelpalace',
      synchronize: true,
      logging: true,
      autoLoadEntities: true
    }),
    UserModule,
    AddressModule,
    InventoryModule,
    ProductModule,
    CategoryModule,
    CartModule,
    CartItemModule,
    OrderModule,
    OrderItemModule,
    PaymentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
