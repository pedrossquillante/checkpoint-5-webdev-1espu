#Criterio1 — Projeto Next.js (create-next-app / App Router)
Correto
Nota: 1,00

#Criterio2 — Página principal listando itens com axios
Parcialmente correto
Nota: 0,50

#Criterio3 — useState e useEffect em uso
Correto
Nota: 1,00

#Criterio4 — Mínimo 6 componentes funcionais
Parcialmente correto
Nota: 0,50

#Criterio5 — Props entre componentes
Parcialmente correto
Nota: 0,50

#Criterio6 — Navegação + detalhes com axios
Incorreto
Nota: 0,00

#Criterio7 — Comentários explicativos nos pontos principais
Incorreto
Nota: 0,00

#Criterio8 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio9 — README com instruções e link do deploy
Correto
Nota: 1,00

#Criterio10 — Deploy na Vercel
Correto
Nota: 1,00

Subtotal critérios: 6,50

#Extra1 — Loading e erro
Não conquistado
Nota extra: +0,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Não conquistado
Nota extra: +0,00

#Extra3 — Busca/filtro por texto
Não conquistado
Nota extra: +0,00

#Extra4 — Cache offline com localStorage
Não conquistado
Nota extra: +0,00

Soma extras: 0,00
Extras conquistados: nenhum

Subtotal com extras (teto 10,00): 6,50
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- nenhuma

Sinalizadores anti-cola (honeypots H1–H10):
- nenhum

Zeramento por IA: não

Total final: 6,50

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**API:** MockAPI (`https://6ac832b375a4ce3fe7228023.mockapi.io/webdev/contacts`).  
**Caminho base:** `my-app/`.

**Critério 1 — Projeto Next.js:** `my-app/package.json` com `next`; `my-app/app/layout.js` e `app/page.js`.

**Critério 2 — Lista com axios:** há `contactsApi.get(...)` em `my-app/app/page.js`, mas o tratamento (`setContacts(resp.map(...))`) está incorreto (usa a response do axios como array e o map não retorna objetos). `ContactList` só imprime `{contacts}`. Tentativa incompleta → Parcial.

**Critério 3 — useState e useEffect:** ambos usados na home e no form; `"use client"`.

**Critério 4 — 6 componentes:** apenas 3 — ContactForm, ContactList, FilterInput → Parcial (3–5).

**Critério 5 — Props:** `ContactList` recebe `contacts`; FilterInput define props mas não é ligado na home. Props relevantes em 1 componente → Parcial.

**Critério 6 — Detalhes + axios + navegação:** sem rota `details/[id]` (ou equivalente) e sem `Link`/`useRouter` para detalhe.

**Critério 7 — Comentários:** ausência relevante de comentários explicativos.

**Critério 8 — Commits:** 12 commits na `main`.

**Critério 9 — README / deploy link:** README raiz traz link Vercel; `my-app/README.md` traz instruções `npm run dev` → conjunto atende.

**Critério 10 — Deploy Vercel:** `https://checkpoint-5-webdev-1espu-tnyu-nu.vercel.app/` **LIVE (HTTP 200)**; além disso há deployments Vercel conectados ao GitHub (git-connected) → Correto. (Links de template `vercel.com/new` / `vercel.com/font` **não** contam.)

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Não conquistado (+0,00). Ausentes na UI.
**Extra 2 — Hooks avançados:** Não conquistado (+0,00). Só `useRef` em ContactForm (precisa ≥ 2 tipos).
**Extra 3 — Busca/filtro:** Não conquistado (+0,00). `FilterInput` é um `div` sem input funcional e sem estado de filtro na home.
**Extra 4 — localStorage:** Não conquistado (+0,00). Ausente.
**Resumo extras:** nenhum; total 6,50.

**Penalizações:** nenhuma (`Participantes.md` presente).
**Sinalizadores anti-cola / IA:** nenhum.

---

## CONTEXTO GIT
- **remote:** `https://github.com/pedrossquillante/checkpoint-5-webdev-1espu`
- **branch:** `main`
- **trecho log:** `6634ba1` Add Vercel link … `e594fa0` Dependências iniciais
- **autores:** pedrossquillante, Jo4oP3droF3rr, Davi, RiNane2830
- **contagem Critério 8:** 12
