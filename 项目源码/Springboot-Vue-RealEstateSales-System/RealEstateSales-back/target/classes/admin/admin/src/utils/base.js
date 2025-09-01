const base = {
    get() {
        return {
            url : "http://localhost:8080/fangdicanxiaoshou/",
            name: "fangdicanxiaoshou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/fangdicanxiaoshou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "房地产销售管理系统"
        } 
    }
}
export default base
