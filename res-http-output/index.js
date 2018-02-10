//用于处理ajax请求并返回成功或失败状态的处理函数
// 注：此模块为我的一位老师所写，我经过改变一些内容进行上传
/*
    注：本方法返回格式content-Type永远是application/json
    ***参数说明
    res:<response>对像，用于输出，必填。
    status:<array>[2]状态对像 0 对应状态码  1提供提示信息 
    message:<string>用于传递提示信息，可不提供
    data:<object>用于输出JSON内容，可不提供
 */
const httpout = {
    init: function (res, status = [], message, data) {
        //如果第三参数为object，且无第四参数，就认为第三参数是data
        if (!!message && typeof message == 'object' && !data) {
            data = message;
            message = undefined;
        }

        let result = data;
        // 自定义状态码和信息
        // http状态码大于多少进行自定义处理
        if (status[0] > 600) {
            res.writeHead(status[0] || 200, status[2] || "Not Information", { 'content-Type': "application/json" });
        } else {
            res.writeHead(status[0] || 200, { 'content-Type': "application/json" });
        }

        if (data) {
            res.end(JSON.stringify(data));
        } else {
            res.end(JSON.stringify({ message: message || status[1] || "发生了未知错误" }));
        }
    },
    // 近乎完整的状态码
    AllStatus: {
        // 正常如果不传入返回信息时，默认为下面的对应字符，可以修改
        // 因为内容过多，所以返回信息写的为状态码的英文
        // 成功
        e200: [200, "ok"],
        e201: [201, "Created"],
        e202: [202, "Accepted"],
        e203: [203, "Non-Authoritative Information"],
        e204: [204, "No Content"],
        e205: [205, "Reset Content"],
        e206: [206, "Partial Content"],
        e207: [207, "Multi-Status"],
        // 重定向
        e300: [300, "Multiple Choices"],
        e301: [301, "Created"],
        e301: [301, "Moved Permanently"],
        e302: [302, "Move temporarily"],
        e303: [303, "See Other"],
        e304: [304, "Not Modified"],
        e305: [305, "Use Proxy"],
        e306: [306, "Switch Proxy"],
        e307: [307, "Temporary Redirect"],
        // 请求错误
        e400: [400, "Bad Request"],
        e401: [401, "Unauthorized"],
        e401: [401, "Unauthorized"],
        e403: [403, "Forbidden"],
        e404: [404, "Not Found"],
        e405: [405, "Method Not Allowed"],
        e406: [406, "Not Acceptable"],
        e407: [407, "Proxy Authentication Required"],
        e408: [408, "Request Timeout"],
        e409: [409, "Conflict"],
        e410: [410, "Gone"],
        e411: [411, "Length Required"],
        e412: [412, "Precondition Failed"],
        e413: [413, "Request Entity Too Large"],
        e414: [414, "Request-URI Too Long"],
        e415: [415, "Unsupported Media Type"],
        e416: [416, "Requested Range Not Satisfiable"],
        e417: [417, "Expectation Failed"],
        e421: [421, "Too many connections"],
        e422: [422, "Unprocessable Entity"],
        e423: [423, "Locked"],
        e424: [424, "Failed Dependency"],
        e425: [425, "Unordered Collection"],
        e426: [426, "Upgrade Required"],
        e449: [449, "Retry With"],
        e451: [451, "Unavailable For Legal Reasons"],
        // 服务器错误
        e500: [500, "Internal Server Error"],
        e501: [501, "Not Implemented"],
        e502: [502, "Bad Gateway"],
        e503: [503, "Service Unavailable"],
        e504: [504, "Gateway Timeout"],
        e505: [505, "HTTP Version Not Supported"],
        e506: [506, "Variant Also Negotiates"],
        e507: [507, "Insufficient Storage"],
        e509: [509, "Bandwidth Limit Exceeded"],
        e510: [510, "Not Extended"],
        e600: [600, "Unparseable Response Headers"],

    },
    // 基本常用的状态码
    BaseStatus: {
        // 常用的状态码
        // 较少，所以写成了文字叙述
        ok: [200, "请求完成。"],
        e400: [400, "语义有误，当前请求无法被服务器理解。"],
        e401: [401, "当前请求需要登录管理员帐号。"],
        e403: [403, "服务器已经理解请求，但是拒绝执行它。"],
        e404: [404, "未找到指定资源。"],
        e500: [500, "未知错误，无法完成请求。"]
    },
    // 自定义状态码
    CustomStatus: {
        // 自定义,因为目前所知状态码到600为止，所以为大于600的都为自定义状态码
        // 901：为状态码；第一个"Information Error"，代表当不存在输出信息时，自动的信息输出，第二个"Information Error"代表着例如200后面的ok的英文说明
        s901: [901, "Information Error", "Information Error"]
    }
};

module.exports = httpout;
// resOut.init(res,resOut.AllStatus.e500);