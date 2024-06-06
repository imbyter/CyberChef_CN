/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

/**
 * Object to handle the creation of operation categories.
 */
class HTMLCategory {

    /**
     * HTMLCategory constructor.
     *
     * @param {string} name - The name of the category.
     * @param {boolean} selected - Whether this category is pre-selected or not.
     */
    constructor(name, selected) {
        this.name = name;
        this.selected = selected;
        this.opList = [];
    }


    /**
     * Adds an operation to this category.
     *
     * @param {HTMLOperation} operation - The operation to add.
     */
    addOperation(operation) {
        this.opList.push(operation);
    }


    /**
     * Renders the category and all operations within it in HTML.
     *
     * @returns {string}
     */
    toHtml() {
        const catName = "cat" + this.name.replace(/[\s/\-:_]/g, "");
        let catTitle = (this.name === "Favourites" ? "收藏夹" : this.name);
        if (this.name === "Data format") {
            catTitle = "数据格式化";
        }
        if (this.name === "Encryption / Encoding") {
            catTitle = "加解密/编码";
        }
        if (this.name === "Public Key") {
            catTitle = "非对称加密";
        }
        if (this.name === "Arithmetic / Logic") {
            catTitle = "算术/逻辑";
        }
        if (this.name === "Networking") {
            catTitle = "网络";
        }
        if (this.name === "Language") {
            catTitle = "语言";
        }
        if (this.name === "Utils") {
            catTitle = "实用工具";
        }
        if (this.name === "Date / Time") {
            catTitle = "日期/时间";
        }
        if (this.name === "Extractors") {
            catTitle = "数据提取";
        }
        if (this.name === "Compression") {
            catTitle = "压缩/解压";
        }
        if (this.name === "Hashing") {
            catTitle = "哈希";
        }
        if (this.name === "Code tidy") {
            catTitle = "代码格式化";
        }
        if (this.name === "Forensics") {
            catTitle = "数据取证";
        }
        if (this.name === "Multimedia") {
            catTitle = "多媒体";
        }
        if (this.name === "Other") {
            catTitle = "其它";
        }
        if (this.name === "Flow control") {
            catTitle = "流程控制";
        }
        let html = `<div class="panel category">
        <a class="category-title" data-toggle="collapse" data-target="#${catName}">
            ${catTitle}
        </a>
        <div id="${catName}" class="panel-collapse collapse ${(this.selected ? " show" : "")}" data-parent="#categories">
            <ul class="op-list">`;

        for (let i = 0; i < this.opList.length; i++) {
            html += this.opList[i].toStubHtml();
        }

        html += "</ul></div></div>";
        return html;
    }

}

export default HTMLCategory;
