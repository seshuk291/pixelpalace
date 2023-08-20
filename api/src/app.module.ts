import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ProductCategoryModule } from './product_category/product_category.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart_item/cart_item.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order_item/order_item.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [UserModule, AddressModule, InventoryModule, ProductModule, CategoryModule, ProductCategoryModule, CartModule, CartItemModule, OrderModule, OrderItemModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
