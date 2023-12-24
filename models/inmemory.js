// importer la classe Qcm
const Qcm = require("./qcm");

// remplacer les simples chaînes de caractères par des instances de la classe Qcm
const qcms = [
    new Qcm({
        id: 0,
        name: "Introduction Vanilla JS",
        nbpoints: 20,
        subject: "Javascript",
        questions: [
            {
                name: "Comment JavaScript facilite-t-il le développement d'applications web interactives et quels sont ses principaux rôles dans la création d'expériences utilisateur dynamiques?",
                answers: [
                    {
                        name: "JavaScript est principalement utilisé pour la conception de bases de données.",
                        correct: false,
                    },
                    {
                        name: "JavaScript est principalement utilisé pour styliser les pages web.",
                        correct: false,
                    },
                    {
                        name: "JavaScript permet l'ajout de comportements interactifs aux pages web, réagissant aux actions de l'utilisateur.",
                        correct: true,
                    },
                    {
                        name: "JavaScript est utilisé exclusivement pour la création de serveurs web.",
                        correct: false,
                    },
                ],
            },
        ],
    }),
    new Qcm({
        id: 1,
        name: "Framework Frontend",
        nbpoints: 20,
        subject: "Angular",
        questions: [
            {
                name: "Quel est le rôle principal d'un framework frontend dans le développement d'applications web modernes?",
                answers: [
                    {
                        name: "Les frameworks frontend facilitent la création d'interfaces utilisateur interactives et réactives.",
                        correct: true,
                    },
                    {
                        name: "Les frameworks frontend sont principalement utilisés pour gérer les bases de données d'une application.",
                        correct: false,
                    },
                    {
                        name: "Les frameworks frontend sont principalement utilisés pour styliser les pages web.",
                        correct: false,
                    },
                    {
                        name: "Les frameworks frontend sont exclusivement utilisés pour gérer les opérations côté serveur.",
                        correct: false,
                    },
                ],
            },
        ],
    }),
    new Qcm({
        id: 2,
        name: "Framework Backend",
        nbpoints: 10,
        subject: "Express",
        questions: [
            {
                name: "Quel est le rôle principal d'un framework backend dans le développement d'applications web modernes?",
                answers: [
                    {
                        name: "Les frameworks backend sont principalement utilisés pour définir le style visuel des pages web.",
                        correct: false,
                    },
                    {
                        name: "Les frameworks backend facilitent le développement de la logique métier, de la gestion des données et des opérations côté serveur.",
                        correct: true,
                    },
                    {
                        name: "Les frameworks backend sont principalement utilisés pour gérer les interactions utilisateur côté client.",
                        correct: false,
                    },
                    {
                        name: "Les frameworks backend sont exclusivement utilisés pour gérer les animations et les transitions sur les pages web.",
                        correct: false,
                    },
                ],
            },
        ],
    }),
];

const addQcm = (rawObject) => {
    let maxId = 0;

    qcms.forEach((qcm) => {
        if (maxId < qcm.id) {
            maxId = qcm.id;
        }
    });

    const qcm = new Qcm({
        id: maxId + 1,
        name: rawObject.name,
        subject: rawObject.subject,
        nbpoints: Number(rawObject.nbpoints),
        questions: rawObject.questions || [],
    });

    qcms.push(qcm);
};

module.exports = { qcms, addQcm };
