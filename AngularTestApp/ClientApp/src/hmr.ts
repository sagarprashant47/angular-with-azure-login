import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';
import { AppModule } from './app/app.module';

export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<AppModule>>) => {
  let ngModule: NgModuleRef<AppModule>;

  module.hot.accept();
  bootstrap().then(mod => ngModule = mod);
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};
