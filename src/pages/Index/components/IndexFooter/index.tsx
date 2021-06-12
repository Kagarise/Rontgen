import React from "react";
import {
    QqOutlined
} from '@ant-design/icons';

class IndexFooter extends React.Component {
    render() {
        return (
            <>
                Made with ❤ by <a target="_blank" rel="noopener noreferrer"
                                  href="http://kagarise.cn/">Kagarise</a>
                <br/>
                <QqOutlined style={{color: 'rgb(33,169,255)'}}/> <a target="_blank" rel="noopener noreferrer"
                // href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=3255385205">3255385205</a>
                                                                    href="tencent://QQInterLive/?Cmd=2&Uin=3255385205">3255385205</a>
                {/*href="tencent://message/?uin=3255385205&Site=Sambow&Menu=yes">3255385205</a>*/}
            </>
        )
    }
}

export default IndexFooter;