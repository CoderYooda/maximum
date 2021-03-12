export default {
    data: function () {
        return {
            tags: [],
        }
    },
    methods: {
        parse(module){
            let html = module.template.html;
            let tags = [];
            for (let i = 0; i < html.length; i++){
                if(html[i] === "[" && html[i+1] === "["){

                    let tag_index = i+2;
                    let tag = '';
                    while (html[tag_index] !== ']'){
                        tag += html[tag_index];
                        tag_index++;
                    }
                    console.log(tag);
                    if(tag !== 'token')

                        tags.push(tag);
                }
            }

            tags.forEach((tag) => {
                let tag_splited = tag.split('|');
                html = html.replace('[[' + tag + ']]', '<div id="chunk_' + tag_splited[0] + '_' + tag_splited[1] + '"></div>');
            });
            this.tags = tags;
            return html
        }
    }
}
