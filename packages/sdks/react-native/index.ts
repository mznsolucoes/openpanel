import { AppState, Platform } from 'react-native';
import * as Application from 'expo-application';
import Constants from 'expo-constants';

import type { OpenpanelOptions, PostEventPayload } from '@openpanel/sdk';
import { Openpanel } from '@openpanel/sdk';

type OpenpanelNativeOptions = OpenpanelOptions;

export class OpenpanelNative extends Openpanel<OpenpanelNativeOptions> {
  constructor(options: OpenpanelNativeOptions) {
    super(options);

    this.api.headers['User-Agent'] = Constants.getWebViewUserAgentAsync();

    AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        this.setProperties();
      }
    });

    this.setProperties();
  }

  private async setProperties() {
    this.setGlobalProperties({
      __version: Application.nativeApplicationVersion,
      __buildNumber: Application.nativeBuildVersion,
      __referrer:
        Platform.OS === 'android'
          ? await Application.getInstallReferrerAsync()
          : undefined,
    });
  }

  public screenView(
    route: string,
    properties?: PostEventPayload['properties']
  ): void {
    super.event('screen_view', {
      ...properties,
      __path: route,
    });
  }
}
