/* tslint:disable */
import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {
  ApiConfiguration,
  ApiConfigurationInterface
} from "./api-configuration";

import { BusinessesService } from "./services/businesses.service";
import { UsersService } from "./services/users.service";
import { ValuesService } from "./services/values.service";

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [ApiConfiguration, BusinessesService, UsersService, ValuesService]
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: { rootUrl: customParams.rootUrl }
        }
      ]
    };
  }
}
