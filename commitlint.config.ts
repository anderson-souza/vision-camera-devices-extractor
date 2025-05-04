import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  rules: {
    'footer-empty': [RuleConfigSeverity.Error, 'always'],
    'scope-empty': [RuleConfigSeverity.Error, 'never'],
  },
  // ...
};

export default Configuration;
