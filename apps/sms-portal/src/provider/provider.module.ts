import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProviderModuleBase } from "./base/provider.module.base";
import { ProviderService } from "./provider.service";
import { ProviderController } from "./provider.controller";
import { ProviderResolver } from "./provider.resolver";

@Module({
  imports: [ProviderModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProviderController],
  providers: [ProviderService, ProviderResolver],
  exports: [ProviderService],
})
export class ProviderModule {}
