import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DbModule } from './database/db.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DbModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
