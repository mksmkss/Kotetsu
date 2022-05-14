type ParamList ={
    'Subjects': undefined;
    'Units': {
        name: string;
        unitIDs: string[];
    };
    'List': {
        name: string;
        elementIDs: string[];
    };
    'Detail': {
        element: {
            canvas:any,
            tagIDs: string[],
            date: {
              created: number,
              modified: number,
            },
            note: string[],
            text: string[],
            image: any[],
            ref: string[],
        };
        isDrawerOpen: boolean
    };
    // 'NullScreen': undefined;
    // Navigator内のStackとしてのNullScreenを消したり理由は、
    // 鈴木がNullScreenを<NullScreen />としてしか使っていなかったから。
    // navigation.navigate('NullScreen')的に使うならここのコメントアウトを解除
};

export default ParamList;
