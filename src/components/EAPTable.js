import styled from 'styled-components'

export default function EAPTable () {
    return (
        <Table>
            <tr>
                <th>Código</th>
                <th>Pacote</th>
                <th>Responsável</th>
                <th>Descrição</th>
                <th>Cirtérios de Aceitação</th>
            </tr>
            <tbody>
                <tr>
                    <td>1.1</td>
                    <td>Fluxograma</td>
                    <td>Todos os desenvolvedores</td>
                    <td>Diagramação de todo o fluxo para o funcionamento completo da aplicação</td>
                    <td>O diagrama deve conter uma representação end to end de todas as funcionalidades especificadas nos requisitos definidos no termo de abertura</td>
                </tr>
                <tr>
                    <td>1.2</td>
                    <td>Design de telas</td>
                    <td>Bruno Contreras & Lucas Mendes</td>
                    <td>Prototipação das telas da aplicação </td>
                    <td>O design deve conter todas as telas identificadas como necessárias no fluxograma</td>
                </tr>
                <tr>
                    <td>1.3</td>
                    <td>Estrutura do BD</td>
                    <td>Victor Ferreira & Adalberto Shindy</td>
                    <td>Criação de DER e diagramação da modelagem de dados lógica</td>
                    <td>O esquema definido deve ser capaz de comportar as informações identificadas com a necessidade de persistência durante o desenvolvimento do fluxograma e design de telas</td>
                </tr>
                <tr>
                    <td>2.1</td>
                    <td>Back-end</td>
                    <td>Todos os desenvolvedores</td>
                    <td>Definição do SGBD e linguagem de programação a serem utilizados no back-end da aplicação, juntamente com potencias plataformas para implantações dos servidores, entre outras tecnologias necessárias</td>
                    <td>Todas as escolhas devem possibilitar o desenvolvimento da aplicação de acordo com os resultados da primeira fase</td>
                </tr>
                <tr>
                    <td>2.2</td>
                    <td>Front-end</td>
                    <td>Todos os desenvolvedores</td>
                    <td>Definição de linguagens a serem utilizadas no fronti-end da aplicação, juntamente com possíveis plataformas de publicação da mesma, entre outras tecnologias necessárias</td>
                    <td>Todas as escolhas devem possibilitar o desenvolvimento da aplicação de acordo com os resultados da primeira fase</td>
                </tr>
                <tr>
                    <td>2.3</td>
                    <td>Apis e frameworks</td>
                    <td>Todos os desenvolvedores</td>
                    <td>Busca e definição de api's necessárias para a obtenção de informações necessárias para a criação e população dos eventos, definição de frameworks e ou biblitecas imaginando a integração front-end + back-end, entre outras tecnologias necessárias</td>
                    <td>Todas as escolhas devem possibilitar o desenvolvimento da aplicação de acordo com os resultados da primeira fase</td>
                </tr>
                <tr>
                    <td>3.1</td>
                    <td>Banco de dados</td>
                    <td>Adalberto Shindy</td>
                    <td>Construção do banco de dados especificado na fase anterior</td>
                    <td>Estar de acordo com o que foi estabelecido na fase anterior, com possíveis mudaças sendo feitas de acordo com a necessidade e sob razoável justificativa</td>
                </tr>
                <tr>
                    <td>3.2</td>
                    <td>Api própria</td>
                    <td>Victor Ferreira </td>
                    <td>Desenvolvimento da base da API (interação com o BD e rotas principais - no mínimo rotas que suportem funcionalidades desenvolvidas nos pacotes [4.1, 4.5]).</td>
                    <td>Estar de acordo com o que foi estabelecido na fase anterior, com possíveis mudaças sendo feitas de acordo com a necessidade e sob razoável justificativa</td>
                </tr>
                <tr>
                    <td>3.3</td>
                    <td>Telas e navegação</td>
                    <td>Bruno Contreras & Lucas Mendes</td>
                    <td>Criação da base das telas especificadas e navegação entre as mesmas, sem estilização final e funcionalides especificadas </td>
                    <td>Estar de acordo com o que foi estabelecido na fase anterior, com possíveis mudaças sendo feitas de acordo com a necessidade e sob razoável justificativa</td>
                </tr>
                <tr>
                    <td>4.1</td>
                    <td>Integração (front, back, apis)</td>
                    <td>Todos os desenvolvedores</td>
                    <td>Comunicação entre api própria e apis externas, estrutura de funções necessárias para o consumo da api própria pelo front-end</td>
                    <td>Comunicação sem falhas, o front-end deve ser capaz de obter todas as informações necessárias para o seu funcionamento (de acordo com o que foi definido anteriormente, com possíveis acréscimos de acordo com a necessidade)</td>
                </tr>
                <tr>
                    <td>4.2</td>
                    <td>Conta de usuário</td>
                    <td>Todos os desenvolvedores</td>
                    <td>Persistência e recuperação de dados (rotas de api) e experiência do usuário concluídas para: criação de conta(perfil de usuário); gerenciamento de conta (troca de informações, recuperação de senhas, etc.); Exclusão/ encerramento de conta. </td>
                    <td>Deve ser possível criar, editar e excluir uma conta pessoal pela aplicação</td>
                </tr>
                <tr>
                    <td>4.3</td>
                    <td>Informações de eventos no banco de dados</td>
                    <td>Victor Ferreira & Adalberto Shindy</td>
                    <td>Consumo de api's externas e/ou pesquisas manuais (caso necessário) para a população do banco de dados com as informações necessárias para a criação de um evento a ser oferecido ao usuário (fotos, localização, horário de funcionamento, informações de acessibilidade, etc.)</td>
                    <td>O banco de dados deve conter informações suficientes para cumprir com  as definições feitas em fases anteriores à respeito do que será exibido ao usuário e o que será usado em outras features internas da aplicação (quantidade mínima de entradas à ser definida)</td>
                </tr>
                <tr>
                    <td>4.4</td>
                    <td>Fluxo de interação usuário eventos</td>
                    <td>Bruno Contreras & Lucas Mendes</td>
                    <td>Desenvolvimento das telas e funcionalidades relacionadas a interação do usuário com os eventos sugeridos: exibição dos evento; possibilidade de demostrar interesse ou não; possibilidade de confirmar interesse em participar do evento; acessar informações mais detalhadas sobre o evento.</td>
                    <td>Deve estar concluído o loop de exibição de eventos ao usuário, o usuário deve ser capaz negar interesse e outro evento será sugerido, de demonstrar ineresse, sendo exibidas informações mais detalhadas e persistindo este usuário como um participante naquele evento</td>
                </tr>
                <tr>
                    <td>4.5</td>
                    <td>Interação usuário-usuário</td>
                    <td>Bruno Contreras & Lucas Mendes</td>
                    <td>Desenvolvimento das funcionalidades que possibilitem usuários visualizar perfis de outros usuários, e avaliar participantes de eventos que participou</td>
                    <td>O usuário deve ser capaz de vizualizar as informações de todos os participantes de eventos que confirmou interesse, e avaliar positiva ou negativamente participantes após a ocorrência do evento</td>
                </tr>
                <tr>
                    <td>4.6</td>
                    <td>Segurança e reporte de usuários</td>
                    <td>Todos os desenvolvedores</td>
                    <td>Rotas na api e telas necessárias para a denúncia de usuários</td>
                    <td>Um usuário deve ser capaz de denunciar outro que participou de um evento em comum</td>
                </tr>
                <tr>
                    <td>4.7</td>
                    <td>Histórico e feedback de usuário</td>
                    <td>Todos os desenvolvedores</td>
                    <td>Rotas necessárias na api e telas para a persistência e visualização dos eventos que um usuário participou</td>
                    <td>O usuário deve ser capaz de consultar seu histórico de eventos participados</td>
                </tr>
                <tr>
                    <td>5.1</td>
                    <td>Servidores back-end</td>
                    <td>Victor Ferreira & Adalberto Shindy</td>
                    <td>Contratação de plano e publicação da api na hospedagem final  </td>
                    <td>Deve ser possível consumir a api pela aplicação sem problemas</td>
                </tr>
                <tr>
                    <td>5.2</td>
                    <td>Lojas de aplicativos</td>
                    <td>Bruno Contreras & Lucas Mendes</td>
                    <td>Disponibilização da aplicação nas lojas de aplicativos que sejam possíveis</td>
                    <td>Deve ser possível instalar a aplicação em smartphones através de ao menos uma plataforma de aplicativos</td>
                </tr>
                <tr>
                    <td>6.1</td>
                    <td>Redes sociais </td>
                    <td>Bruno Contreras & Lucas Mendes</td>
                    <td>Divulgações da aplicação nas redes sociais</td>
                    <td>Execução contínua. Critérios de aceitação ainda não definidos</td>
                </tr>
                <tr>
                    <td>6.2</td>
                    <td>Anúncios</td>
                    <td>Bruno Contreras & Lucas Mendes</td>
                    <td>Exploração de formas de anúnciar a aplicação, por exemplo, em plataformas como o youtube</td>
                    <td>Execução contínua. Critérios de aceitação ainda não definidos</td>
                </tr>
                <tr>
                    <td>6.3</td>
                    <td>Parceiros</td>
                    <td>Bruno Contreras & Lucas Mendes</td>
                    <td>Buscar potenciais parceiros que queiram divulgar eventos na aplicação e estejam dispostos a divulga-la. Que ofereçam vantagens para os usuários, entre outras possibilidades</td>
                    <td>Execução contínua. Critérios de aceitação ainda não definidos</td>
                </tr>
                <tr>
                    <td>6.4</td>
                    <td>Manutenção e renovação de eventos</td>
                    <td>Victor Ferreira & Adalberto Shindy</td>
                    <td>Gerenciamento dos eventos existentes e inserção de novos eventos na aplicação</td>
                    <td>Execução contínua. Critérios de aceitação ainda não definidos</td>
                </tr>
            </tbody>
        </Table>
    )
}

const Table = styled.table`
    margin-bottom: 50px;
    
    th {
        background-color: var(--color-light-purple);
        padding: 5px 10px;
        color: white;
        font-size: 18px;
    }
    
    td {
        border: 1px solid var(--color-secondary);
        font-size: 14px;
        text-align: center;
    }
`