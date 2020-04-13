//classe de modelo que sera utilizado ao longo do app

export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        //↑↑↑ votes é opcional ,não é obrigatório, por isso o ?

        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    //↓↓↓ extrair da string a parte do domínio

    // http://angular.io/tutorial
    // 0 -> http:
    // 1 -> angular.io/tutorial

    // 0 -> angular.io
    // 1 -> tutorial

    domain(): string {
        try {
            // const domainAndPath = this.link.split('//')[1];
            // return domainAndPath.split('/')[0];

            const domainAndPath = this.link.substr(this.link.indexOf('//') + 2);
            return domainAndPath.substr(0, domainAndPath.indexOf('/'));

        } catch (err) {
            return null;
        }
    }

    //↓↓↓ funções de incremento e decremento que serão utilizadas dentro das funcões addVote() e removeVote() mas poderiam ser usadas em qualquer outro lugar se necessário.
    increment(): void {
        this.votes++;
    }
    decrement(): void {
        this.votes--;
    }
}