import AuthParam from './screens/auth/ParamList';
import MainParam from './screens/main/ParamList';

type ParamList = {
    Welcome: undefined;
    Auth: AuthParam;
    Main: MainParam;
    'Hello World': undefined;
}

export default ParamList;

/*
~~navigator: ナビゲーター
全て大文字: スクリーン
これは必ずしもフォルダーの構造ではない。Navigationの構造である。
RootNavigator
|-WELCOME
|-AuthNavigator
|  |-SIGNUP
|  |-LOGIN
|  |-FORGETPASSWORD
|-MainNavigator
|  |-SettingNavigator
|  |  |-ACCOUNT
|  |  |-APEARANCE
|  |  |-HELP
|  |-NotebookNavigator
|  |  |-SUBJECTS
|  |  |-UNITS
|  |  |-LIST
|  |  |-DETAIL
|  |-ProgressNavigator

*/
