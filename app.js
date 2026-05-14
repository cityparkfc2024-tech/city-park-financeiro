
// ── LOGO ──────────────────────────────────────────────────────────────────────
const LOGO = "./logo.jpg";

// ── CONSTANTES ────────────────────────────────────────────────────────────────
const JOGADORES_INICIAIS = [
  "Geanso","Daniel","Rodrigo","Wila","Carlos","Lucena",
  "Caio","Ramon","José","Everson","Neto","Gustavo",
  "Luciano","Tiago","Luiz","Pedro","Ismael"
];
const MESES = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
const MESES_FULL = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const ANO = 2026;
const MES_ATUAL = 4; // Maio
const MENSALIDADE = 70;
const PIX_KEY = "64.941.932/0001-11";
const SALDO_DEZ_2025 = 362.85; // Saldo final de Dezembro/2025
const STORAGE_KEY = "citypark_fc_v5";

// ── HISTÓRICO DE LANÇAMENTOS 2026 ─────────────────────────────────────────────
const HISTORICO = [
  // JAN
  {id:"h1",desc:"Mensalidade Geanso",valor:100,data:"02/01",mes:0,tipo:"r",jogador:"Geanso"},
  {id:"h2",desc:"Pagamento Contadora 3/3",valor:-500,data:"02/01",mes:0,tipo:"d"},
  {id:"h3",desc:"Mensalidade Daniel",valor:50,data:"05/01",mes:0,tipo:"r",jogador:"Daniel"},
  {id:"h4",desc:"Mensalidade Rodrigo",valor:50,data:"05/01",mes:0,tipo:"r",jogador:"Rodrigo"},
  {id:"h5",desc:"Mensalidade Wila",valor:50,data:"06/01",mes:0,tipo:"r",jogador:"Wila"},
  {id:"h6",desc:"Mensalidade Carlos",valor:50,data:"06/01",mes:0,tipo:"r",jogador:"Carlos"},
  {id:"h7",desc:"Mensalidade Lucena",valor:50,data:"06/01",mes:0,tipo:"r",jogador:"Lucena"},
  {id:"h8",desc:"Pgto Contadora Lucena",valor:38,data:"06/01",mes:0,tipo:"r"},
  {id:"h9",desc:"Mensalidade Caio",valor:50,data:"07/01",mes:0,tipo:"r",jogador:"Caio"},
  {id:"h10",desc:"Pgto Contadora Caio",valor:38,data:"07/01",mes:0,tipo:"r"},
  {id:"h11",desc:"Mensalidade Ramon",valor:50,data:"07/01",mes:0,tipo:"r",jogador:"Ramon"},
  {id:"h12",desc:"Mensalidade José",valor:50,data:"07/01",mes:0,tipo:"r",jogador:"José"},
  {id:"h13",desc:"Mensalidade Everson",valor:50,data:"09/01",mes:0,tipo:"r",jogador:"Everson"},
  {id:"h14",desc:"Copa Sintética + Juiz",valor:-500,data:"10/01",mes:0,tipo:"d"},
  {id:"h15",desc:"Lavagem Fardamento",valor:-15.5,data:"11/01",mes:0,tipo:"d"},
  {id:"h16",desc:"Mensalidade Neto",valor:50,data:"12/01",mes:0,tipo:"r",jogador:"Neto"},
  {id:"h17",desc:"Mensalidade Gustavo",valor:50,data:"12/01",mes:0,tipo:"r",jogador:"Gustavo"},
  {id:"h18",desc:"Juiz Copa Sintética",valor:-100,data:"17/01",mes:0,tipo:"d"},
  {id:"h19",desc:"Água Supermix",valor:-17,data:"17/01",mes:0,tipo:"d"},
  {id:"h20",desc:"Lavagem Fardamento",valor:-31,data:"18/01",mes:0,tipo:"d"},
  {id:"h21",desc:"Mensalidade Luciano",valor:50,data:"20/01",mes:0,tipo:"r",jogador:"Luciano"},
  {id:"h22",desc:"Aluguel Arena Bob",valor:-70,data:"21/01",mes:0,tipo:"d"},
  {id:"h23",desc:"Mensalidade Tiago",valor:100,data:"22/01",mes:0,tipo:"r",jogador:"Tiago"},
  {id:"h24",desc:"Churrasqueira Diretoria",valor:-40,data:"23/01",mes:0,tipo:"d"},
  {id:"h25",desc:"Juiz Copa Sintética 3º Jogo",valor:-100,data:"24/01",mes:0,tipo:"d"},
  {id:"h26",desc:"Lavagem Fardamento",valor:-31,data:"24/01",mes:0,tipo:"d"},
  // FEV
  {id:"h27",desc:"Mensalidade Luiz",valor:120,data:"04/02",mes:1,tipo:"r",jogador:"Luiz"},
  {id:"h28",desc:"Mensalidade Ramon",valor:70,data:"04/02",mes:1,tipo:"r",jogador:"Ramon"},
  {id:"h29",desc:"Mensalidade Rodrigo",valor:70,data:"04/02",mes:1,tipo:"r",jogador:"Rodrigo"},
  {id:"h30",desc:"Mensalidade Everson",valor:70,data:"05/02",mes:1,tipo:"r",jogador:"Everson"},
  {id:"h31",desc:"Rateio Cartório – Everson 1/3",valor:53,data:"05/02",mes:1,tipo:"r"},
  {id:"h32",desc:"Mensalidade Neto",valor:70,data:"06/02",mes:1,tipo:"r",jogador:"Neto"},
  {id:"h33",desc:"Lavanderia",valor:-31,data:"06/02",mes:1,tipo:"d"},
  {id:"h34",desc:"Mensalidade Wila",valor:70,data:"09/02",mes:1,tipo:"r",jogador:"Wila"},
  {id:"h35",desc:"Mkt – Canva",valor:-35,data:"09/02",mes:1,tipo:"d"},
  {id:"h36",desc:"Mensalidade Daniel",valor:70,data:"12/02",mes:1,tipo:"r",jogador:"Daniel"},
  {id:"h37",desc:"Mensalidade Caio",valor:70,data:"12/02",mes:1,tipo:"r",jogador:"Caio"},
  {id:"h38",desc:"Rateio Cartório – Wila 1/3",valor:52.75,data:"13/02",mes:1,tipo:"r"},
  {id:"h39",desc:"Rateio Cartório – Geanso 1/3",valor:52.75,data:"13/02",mes:1,tipo:"r"},
  {id:"h40",desc:"Mensalidade Ismael",valor:60,data:"18/02",mes:1,tipo:"r",jogador:"Ismael"},
  {id:"h41",desc:"Mensalidade José",valor:70,data:"24/02",mes:1,tipo:"r",jogador:"José"},
  {id:"h42",desc:"Mensalidade Luciano",valor:70,data:"24/02",mes:1,tipo:"r",jogador:"Luciano"},
  {id:"h43",desc:"Pgto Cartório (Everson/Wila/Geanso)",valor:-158.5,data:"24/02",mes:1,tipo:"d"},
  {id:"h44",desc:"Reembolso cesta básica 2ª Div.",valor:-70,data:"24/02",mes:1,tipo:"d"},
  // MAR
  {id:"h45",desc:"Mensalidade Ramon",valor:70,data:"02/03",mes:2,tipo:"r",jogador:"Ramon"},
  {id:"h46",desc:"Mensalidade Lucena (ref. fev)",valor:70,data:"02/03",mes:2,tipo:"r",jogador:"Lucena"},
  {id:"h47",desc:"Mensalidade Pedro (jan/fev/mar)",valor:190,data:"02/03",mes:2,tipo:"r",jogador:"Pedro"},
  {id:"h48",desc:"Mensalidade Geanso",valor:70,data:"02/03",mes:2,tipo:"r",jogador:"Geanso"},
  {id:"h49",desc:"Mensalidade Rodrigo",valor:70,data:"02/03",mes:2,tipo:"r",jogador:"Rodrigo"},
  {id:"h50",desc:"INTEGR. CAPITAL SUBSCRITO",valor:-1000,data:"04/03",mes:2,tipo:"d"},
  {id:"h51",desc:"Mensalidade Everson",valor:70,data:"05/03",mes:2,tipo:"r",jogador:"Everson"},
  {id:"h52",desc:"Mensalidade Daniel",valor:70,data:"06/03",mes:2,tipo:"r",jogador:"Daniel"},
  {id:"h53",desc:"Aluguel Arena Bob",valor:-145,data:"09/03",mes:2,tipo:"d"},
  {id:"h54",desc:"Mensalidade Wila",valor:70,data:"10/03",mes:2,tipo:"r",jogador:"Wila"},
  {id:"h55",desc:"Mensalidade Caio",valor:70,data:"10/03",mes:2,tipo:"r",jogador:"Caio"},
  {id:"h56",desc:"Mensalidade Neto",valor:70,data:"10/03",mes:2,tipo:"r",jogador:"Neto"},
  {id:"h57",desc:"Tarifa Sicredi",valor:-35,data:"10/03",mes:2,tipo:"d"},
  {id:"h58",desc:"Mensalidade Gustavo",valor:140,data:"16/03",mes:2,tipo:"r",jogador:"Gustavo"},
  {id:"h59",desc:"Contadora Projeto Social 1/2",valor:-250,data:"16/03",mes:2,tipo:"d"},
  {id:"h60",desc:"Aluguel Gol de Placa",valor:-150,data:"18/03",mes:2,tipo:"d"},
  {id:"h61",desc:"Recebimento time adv. amistoso",valor:60,data:"19/03",mes:2,tipo:"r"},
  {id:"h62",desc:"Reserva Churrasqueira",valor:-40,data:"24/03",mes:2,tipo:"d"},
  {id:"h63",desc:"Lavagem Fardamento",valor:-33,data:"24/03",mes:2,tipo:"d"},
  {id:"h64",desc:"Mensalidade José",valor:70,data:"24/03",mes:2,tipo:"r",jogador:"José"},
  // ABR
  {id:"h65",desc:"Mensalidade Lucena",valor:70,data:"06/04",mes:3,tipo:"r",jogador:"Lucena"},
  {id:"h66",desc:"Mensalidade Everson",valor:70,data:"06/04",mes:3,tipo:"r",jogador:"Everson"},
  {id:"h67",desc:"Mensalidade Caio",valor:70,data:"07/04",mes:3,tipo:"r",jogador:"Caio"},
  {id:"h68",desc:"Mensalidade Daniel",valor:70,data:"08/04",mes:3,tipo:"r",jogador:"Daniel"},
  {id:"h69",desc:"Contadora Projeto Sicredi",valor:-250,data:"08/04",mes:3,tipo:"d"},
  {id:"h70",desc:"Mensalidade Neto",valor:70,data:"08/04",mes:3,tipo:"r",jogador:"Neto"},
  {id:"h71",desc:"Mensalidade Rodrigo",valor:70,data:"09/04",mes:3,tipo:"r",jogador:"Rodrigo"},
  {id:"h72",desc:"Aluguel Zé Maria Amistoso",valor:-110,data:"10/04",mes:3,tipo:"d"},
  {id:"h73",desc:"Tarifa Sicredi",valor:-35,data:"10/04",mes:3,tipo:"d"},
  {id:"h74",desc:"Mensalidade José",valor:70,data:"17/04",mes:3,tipo:"r",jogador:"José"},
  {id:"h75",desc:"Mensalidade Geanso",valor:70,data:"17/04",mes:3,tipo:"r",jogador:"Geanso"},
  {id:"h76",desc:"Mensalidade Gustavo",valor:70,data:"17/04",mes:3,tipo:"r",jogador:"Gustavo"},
  // MAI
  {id:"h77",desc:"Mensalidade Neto",valor:70,data:"04/05",mes:4,tipo:"r",jogador:"Neto"},
  {id:"h78",desc:"Mensalidade Wila",valor:70,data:"04/05",mes:4,tipo:"r",jogador:"Wila"},
  {id:"h79",desc:"Mensalidade Tiago (fev e mar)",valor:140,data:"04/05",mes:4,tipo:"r",jogador:"Tiago"},
  {id:"h80",desc:"Mensalidade Everson",valor:70,data:"07/05",mes:4,tipo:"r",jogador:"Everson"},
  {id:"h81",desc:"Aluguel Campo Zé Maria",valor:-150,data:"07/05",mes:4,tipo:"d"},
  {id:"h82",desc:"Mensalidade Luiz",valor:70,data:"08/05",mes:4,tipo:"r",jogador:"Luiz"},
  {id:"h83",desc:"Mensalidade Lucena (abr)",valor:70,data:"08/05",mes:4,tipo:"r",jogador:"Lucena"},
  {id:"h84",desc:"Evento Dia das Mães – Pgto Professor de Dança",valor:-100,data:"11/05",mes:4,tipo:"d"},
  {id:"h85",desc:"Tarifa Sicredi",valor:-35,data:"11/05",mes:4,tipo:"d"},
  {id:"h86",desc:"Mensalidade Gustavo",valor:70,data:"11/05",mes:4,tipo:"r",jogador:"Gustavo"},
  {id:"h87",desc:"Aluguel Campo Gol de Placa",valor:-180,data:"12/05",mes:4,tipo:"d"},
  {id:"h88",desc:"Mensalidade Rodrigo",valor:70,data:"13/05",mes:4,tipo:"r",jogador:"Rodrigo"},
  {id:"h89",desc:"Mensalidade Daniel",valor:70,data:"13/05",mes:4,tipo:"r",jogador:"Daniel"},
];

// Pré-popular pagamentos históricos
const PAG_HISTORICOS = {};
HISTORICO.forEach(l => {
  if (l.jogador && l.tipo === "r") {
    const k = `${l.jogador}_${l.mes}`;
    if (!PAG_HISTORICOS[k]) PAG_HISTORICOS[k] = { status:"pago", valor:l.valor, data:l.data };
  }
});

// ── ESTADO PADRÃO ─────────────────────────────────────────────────────────────
function defaultState() {
  return {
    jogadores: JOGADORES_INICIAIS,
    pagamentos: { ...PAG_HISTORICOS }, // { "Nome_mes": { status:"pago"|"abono"|"pendente"|"inativo", valor, data } }
    extras: [],   // lançamentos manuais
    jogos: [],    // partidas registradas
    mesAtivo: MES_ATUAL,
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return { ...defaultState(), ...p, pagamentos: { ...PAG_HISTORICOS, ...(p.pagamentos || {}) } };
    }
  } catch {}
  return defaultState();
}

function saveState(s) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      jogadores: s.jogadores,
      pagamentos: s.pagamentos,
      extras: s.extras,
      jogos: s.jogos,
    }));
  } catch {}
}

// ── HELPERS ───────────────────────────────────────────────────────────────────
const fmt = v => `R$ ${Math.abs(v).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
const fmtS = v => (v < 0 ? "- " : "+ ") + fmt(v);
const cor = v => v >= 0 ? "#22c55e" : "#ef4444";
const pk = (nome, mes) => `${nome}_${mes}`;

// ── COMPONENTE LINHA DE LANÇAMENTO ────────────────────────────────────────────
function LancRow({ item, confirmDel, setConfirmDel, onDel, custom }) {
  const pos = item.valor > 0;
  return (
    <div style={{ background: pos ? "rgba(34,197,94,0.06)" : "rgba(239,68,68,0.06)", border: `1px solid ${pos ? "rgba(34,197,94,0.18)" : "rgba(239,68,68,0.18)"}`, borderRadius: 9, padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#cbd5e1", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.desc}</div>
        {item.data && <div style={{ fontSize: 9, color: "#475569" }}>{item.data}</div>}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 7, flexShrink: 0 }}>
        <span style={{ fontSize: 12, fontWeight: 900, color: pos ? "#22c55e" : "#ef4444" }}>
          {pos ? "+" : "-"} R$ {Math.abs(item.valor).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </span>
        {custom && (confirmDel === item.id
          ? <div style={{ display: "flex", gap: 3 }}>
              <button onClick={() => onDel(item.id)} style={{ padding: "2px 7px", borderRadius: 5, border: "none", cursor: "pointer", background: "#ef4444", color: "#fff", fontSize: 9, fontWeight: 700 }}>Sim</button>
              <button onClick={() => setConfirmDel(null)} style={{ padding: "2px 7px", borderRadius: 5, border: "none", cursor: "pointer", background: "rgba(255,255,255,0.08)", color: "#64748b", fontSize: 9 }}>Não</button>
            </div>
          : <button onClick={() => setConfirmDel(item.id)} style={{ padding: "2px 6px", borderRadius: 5, border: "none", cursor: "pointer", background: "rgba(255,255,255,0.07)", color: "#475569", fontSize: 10 }}>🗑</button>
        )}
      </div>
    </div>
  );
}

// ── APP PRINCIPAL ─────────────────────────────────────────────────────────────
function App() {
  const [st, setSt] = useState(loadState);
  const [tab, setTab] = useState("mensalidades");
  const [copied, setCopied] = useState(false);
  const [showWA, setShowWA] = useState(false);
  const [showHist, setShowHist] = useState(false);
  const [novaDesc, setNovaDesc] = useState("");
  const [novoValor, setNovoValor] = useState("");
  const [novaData, setNovaData] = useState("");
  const [novoTipo, setNovoTipo] = useState("d");
  const [novoJog, setNovoJog] = useState("");
  const [confirmDel, setConfirmDel] = useState(null);
  const [statusPop, setStatusPop] = useState(null);
  const [jogoPop, setJogoPop] = useState(null);   // null | "novo" | id do jogo
  const [jogoForm, setJogoForm] = useState(null);

  useEffect(() => saveState(st), [st]);

  const { jogadores, pagamentos, extras, jogos, mesAtivo } = st;

  const getPag = (nome, m) => pagamentos[pk(nome, m)] || { status: "pendente", valor: 0, data: "" };

  // ── CÁLCULOS FINANCEIROS ──────────────────────────────────────────────────
  // Saldo acumulado mês a mês:
  // Jan = Dez/2025 + lançamentos de Jan
  // Fev = saldo final de Jan + lançamentos de Fev
  // Mar = saldo final de Fev + lançamentos de Mar ... etc.
  const saldoPorMes = useMemo(() => {
    const all = [...HISTORICO, ...extras];
    const saldos = {};
    let acumulado = SALDO_DEZ_2025;
    for (let m = 0; m <= 11; m++) {
      const lancMes = all.filter(l => l.mes === m);
      const totalMes = lancMes.reduce((s, l) => s + l.valor, 0);
      acumulado += totalMes;
      saldos[m] = acumulado;
    }
    return saldos; // saldos[m] = saldo ao final do mês m
  }, [extras]);

  // Saldo ao início do mês ativo (= saldo final do mês anterior)
  const saldoAnterior = useMemo(() => {
    if (mesAtivo === 0) return SALDO_DEZ_2025;
    return saldoPorMes[mesAtivo - 1];
  }, [saldoPorMes, mesAtivo]);

  // Saldo acumulado = saldo ao final do mês ativo
  const saldoAcumulado = useMemo(() => {
    return saldoPorMes[mesAtivo];
  }, [saldoPorMes, mesAtivo]);

  const lancMes = useMemo(() => [...HISTORICO, ...extras].filter(l => l.mes === mesAtivo), [extras, mesAtivo]);
  const recMes = lancMes.filter(l => l.valor > 0).reduce((a, l) => a + l.valor, 0);
  const despMes = lancMes.filter(l => l.valor < 0).reduce((a, l) => a + Math.abs(l.valor), 0);
  const saldoMes = recMes - despMes;

  const pagantes = jogadores.filter(n => getPag(n, mesAtivo).status === "pago");
  const abonados = jogadores.filter(n => getPag(n, mesAtivo).status === "abono");
  const abonados2 = jogadores.filter(n => getPag(n, mesAtivo).status === "abono2");
  const inativos = jogadores.filter(n => getPag(n, mesAtivo).status === "inativo");
  const devedores = jogadores.filter(n => !["pago","abono","abono2","inativo"].includes(getPag(n, mesAtivo).status));

  // ── STATS DOS JOGOS ───────────────────────────────────────────────────────
  const statsJogos = useMemo(() => {
    let vitorias=0,empates=0,derrotas=0,gm=0,gs=0,am=0,az=0,vm=0;
    jogos.forEach(j => {
      const cp = j.jogadores ? j.jogadores.reduce((s,jj)=>s+(parseInt(jj.gols)||0),0) : 0;
      const adv = parseInt(j.golsAdv)||0;
      gm += cp; gs += adv;
      if (cp>adv) vitorias++; else if (cp===adv) empates++; else derrotas++;
      (j.jogadores||[]).forEach(jj => {
        am += parseInt(jj.amarelo)||0;
        az += parseInt(jj.azul)||0;
        vm += parseInt(jj.vermelho)||0;
      });
    });
    const total = jogos.length;
    const aproveitamento = total ? Math.round((vitorias*3+empates)/(total*3)*100) : 0;
    return { total, vitorias, empates, derrotas, gm, gs, sg:gm-gs, am, az, vm, aproveitamento };
  }, [jogos]);

  // ── STATS POR JOGADOR ─────────────────────────────────────────────────────
  const statsJogador = useCallback((nome) => {
    let gols=0, partidas=0, amarelos=0, azuis=0, vermelhos=0;
    jogos.forEach(j => {
      const jj = (j.jogadores||[]).find(x=>x.nome===nome);
      if (jj) { partidas++; gols+=parseInt(jj.gols)||0; amarelos+=parseInt(jj.amarelo)||0; azuis+=parseInt(jj.azul)||0; vermelhos+=parseInt(jj.vermelho)||0; }
    });
    return { gols, partidas, amarelos, azuis, vermelhos };
  }, [jogos]);

  // ── AÇÕES ─────────────────────────────────────────────────────────────────
  const setStatus = useCallback((nome, status) => {
    const hoje = new Date();
    const dataStr = `${String(hoje.getDate()).padStart(2,"0")}/${String(hoje.getMonth()+1).padStart(2,"0")}`;
    const extraId = `pag_${nome}_${mesAtivo}`; // ID único do lançamento automático
    setSt(prev => {
      // Atualiza o status do jogador
      const novoPag = {
        ...prev.pagamentos,
        [pk(nome, mesAtivo)]: { status, valor: status==="pago"?MENSALIDADE:0, data: dataStr }
      };
      // Remove lançamento automático anterior deste jogador/mês (se existir)
      let novosExtras = prev.extras.filter(e => e.id !== extraId);
      // Se marcou como PAGO, adiciona receita automática nos lançamentos
      if (status === "pago") {
        novosExtras = [...novosExtras, {
          id: extraId,
          desc: `Mensalidade ${nome}`,
          valor: MENSALIDADE,
          data: dataStr,
          mes: mesAtivo,
          tipo: "r",
          auto: true, // flag: lançamento automático
        }];
      }
      return { ...prev, pagamentos: novoPag, extras: novosExtras };
    });
    setStatusPop(null);
  }, [mesAtivo]);

  const addExtra = () => {
    if (!novaDesc || !novoValor) return;
    const v = parseFloat(novoValor) * (novoTipo==="d"?-1:1);
    setSt(prev => ({ ...prev, extras: [...prev.extras, { id:`e${Date.now()}`, desc:novaDesc, valor:v, data:novaData||new Date().toLocaleDateString("pt-BR").slice(0,5), mes:mesAtivo, tipo:novoTipo }] }));
    setNovaDesc(""); setNovoValor(""); setNovaData("");
  };

  const delExtra = id => { setSt(prev => ({...prev, extras:prev.extras.filter(e=>e.id!==id)})); setConfirmDel(null); };
  const addJog = () => { const n=novoJog.trim(); if(!n||jogadores.includes(n)) return; setSt(prev=>({...prev,jogadores:[...prev.jogadores,n]})); setNovoJog(""); };

  // ── JOGO FORM ─────────────────────────────────────────────────────────────
  const novoJogoDefault = () => ({
    id: `j${Date.now()}`,
    tipo: "Amistoso",
    modalidade: "Society",
    data: "",
    horario: "",
    adversario: "",
    local: "",
    golsAdv: 0,
    jogadores: jogadores.map(n => ({ nome: n, gols: 0, amarelo: 0, azul: 0, vermelho: 0 })),
    resultado: "",
  });

  const abrirNovoJogo = () => { setJogoForm(novoJogoDefault()); setJogoPop("novo"); };
  const abrirEditarJogo = (jogo) => { setJogoForm({...jogo, jogadores: jogadores.map(n => { const jj = (jogo.jogadores||[]).find(x=>x.nome===n); return jj||{nome:n,gols:0,amarelo:0,azul:0,vermelho:0}; })}); setJogoPop(jogo.id); };

  const salvarJogo = () => {
    if (!jogoForm) return;
    const golsCity = (jogoForm.jogadores||[]).reduce((s,jj)=>s+(parseInt(jj.gols)||0),0);
    const golsAdv = parseInt(jogoForm.golsAdv)||0;
    const resultado = golsCity>golsAdv?"V":golsCity===golsAdv?"E":"D";
    const jogo = {...jogoForm, golsAdv, resultado};
    setSt(prev => ({
      ...prev,
      jogos: jogoPop==="novo" ? [...prev.jogos, jogo] : prev.jogos.map(j=>j.id===jogoPop?jogo:j)
    }));
    setJogoPop(null); setJogoForm(null);
  };

  const delJogo = id => { setSt(prev=>({...prev,jogos:prev.jogos.filter(j=>j.id!==id)})); };

  const setJogoJogador = (idx, campo, val) => {
    setJogoForm(prev => {
      const jogs = [...prev.jogadores];
      jogs[idx] = {...jogs[idx], [campo]: val};
      return {...prev, jogadores: jogs};
    });
  };

  const golsCityForm = jogoForm ? (jogoForm.jogadores||[]).reduce((s,jj)=>s+(parseInt(jj.gols)||0),0) : 0;
  const golsAdvForm = jogoForm ? parseInt(jogoForm.golsAdv)||0 : 0;

  const gerarWA = () => {
    const hoje = new Date();
    const d = `${String(hoje.getDate()).padStart(2,"0")}/${String(hoje.getMonth()+1).padStart(2,"0")}`;
    let m = `⚽ *CITY PARK F.C* ⚽\n📋 *Mensalidades – ${MESES_FULL[mesAtivo]}/${ANO}*\n📅 Atualizado em ${d}\n━━━━━━━━━━━━━━━━━━━━\n\n`;
    if (pagantes.length) { m += `✅ *CONFIRMADOS (${pagantes.length})*\n`; pagantes.forEach(n=>{const p=getPag(n,mesAtivo);m+=`  • ${n} — R$ ${p.valor||MENSALIDADE},00${p.data?" ("+p.data+")":""}\n`;}); m+="\n"; }
    if (abonados.length) { m += `🏥 *ABONO MÉDICO (${abonados.length})*\n`; abonados.forEach(n=>{m+=`  • ${n}\n`;}); m+="\n"; }
    if (abonados2.length) { m += `🤝 *ABONO – OUTRO MOTIVO (${abonados2.length})*\n`; abonados2.forEach(n=>{m+=`  • ${n}\n`;}); m+="\n"; }
    if (devedores.length) { m += `❌ *PENDENTES (${devedores.length})*\n`; devedores.forEach(n=>{m+=`  • ${n}\n`;}); m+="\n"; }
    m+=`━━━━━━━━━━━━━━━━━━━━\n`;
    m+=`💰 *Arrecadado:* R$ ${pagantes.reduce((s,n)=>s+(getPag(n,mesAtivo).valor||MENSALIDADE),0).toLocaleString("pt-BR")},00\n`;
    m+=`📊 *Saldo do mês:* ${fmtS(saldoMes)}\n🏦 *Saldo acumulado:* ${fmtS(saldoAcumulado)}\n\n`;
    m+=`━━━━━━━━━━━━━━━━━━━━\n💳 *MENSALIDADE: R$ ${MENSALIDADE},00/mês*\n🔑 *PIX CNPJ:* \`${PIX_KEY}\`\n🏦 Conta Sicredi – City Park F.C`;
    return m;
  };

  const copiar = () => { navigator.clipboard.writeText(gerarWA()).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2500);}); };

  // ── MODAL STATUS MENSALIDADE ──────────────────────────────────────────────
  const StatusModal = () => {
    if (!statusPop) return null;
    const p = getPag(statusPop, mesAtivo);
    const opts = [
      {s:"pago",   label:"✅ Pago",                   bg:"rgba(34,197,94,0.2)",   bdr:"rgba(34,197,94,0.4)",   c:"#22c55e"},
      {s:"abono",  label:"🏥 Abono – Motivo Médico",    bg:"rgba(251,191,36,0.15)", bdr:"rgba(251,191,36,0.4)",  c:"#fbbf24"},
      {s:"abono2", label:"🤝 Abono – Outro Motivo",     bg:"rgba(168,85,247,0.15)", bdr:"rgba(168,85,247,0.4)",  c:"#a855f7"},
      {s:"inativo",label:"😴 Inativo este mês",         bg:"rgba(100,116,139,0.2)", bdr:"rgba(100,116,139,0.4)", c:"#94a3b8"},
      {s:"pendente",label:"❌ Pendente",                 bg:"rgba(239,68,68,0.15)",  bdr:"rgba(239,68,68,0.3)",   c:"#ef4444"},
    ];
    return (
      <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setStatusPop(null)}>
        <div style={{background:"#0d2040",border:"1px solid rgba(255,255,255,0.15)",borderRadius:16,padding:20,minWidth:240,maxWidth:300}} onClick={e=>e.stopPropagation()}>
          <div style={{fontWeight:800,fontSize:15,color:"#e2e8f0",marginBottom:14,textAlign:"center"}}>{statusPop}</div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {opts.map(o => (
              <button key={o.s} onClick={()=>setStatus(statusPop,o.s)} style={{padding:"10px 14px",borderRadius:10,border:`1px solid ${o.bdr}`,background:o.bg,color:o.c,fontWeight:700,fontSize:12,cursor:"pointer",opacity:p.status===o.s?1:0.65}}>
                {o.label}{p.status===o.s?" ← atual":""}
              </button>
            ))}
          </div>
          <button onClick={()=>setStatusPop(null)} style={{marginTop:12,width:"100%",padding:"8px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"#64748b",fontSize:12,cursor:"pointer"}}>Cancelar</button>
        </div>
      </div>
    );
  };

  // ── MODAL JOGO ────────────────────────────────────────────────────────────
  const JogoModal = () => {
    if (!jogoPop || !jogoForm) return null;
    return (
      <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",zIndex:1000,overflowY:"auto",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"16px 8px"}}>
        <div style={{background:"#071428",border:"1px solid rgba(255,255,255,0.12)",borderRadius:16,padding:18,width:"100%",maxWidth:660}} onClick={e=>e.stopPropagation()}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <span style={{fontWeight:800,fontSize:15,color:"#4ade80"}}>⚽ {jogoPop==="novo"?"Novo Jogo":"Editar Jogo"}</span>
            <button onClick={()=>{setJogoPop(null);setJogoForm(null);}} style={{background:"transparent",border:"none",color:"#64748b",fontSize:20,cursor:"pointer"}}>✕</button>
          </div>

          {/* CAMPOS DO JOGO */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
            {[
              {label:"Tipo",field:"tipo",opts:["Amistoso","Campeonato","Torneio"]},
              {label:"Modalidade",field:"modalidade",opts:["Futsal","Society","Campo"]},
            ].map(({label,field,opts})=>(
              <div key={field}>
                <div style={{fontSize:9,color:"#64748b",marginBottom:3,textTransform:"uppercase",letterSpacing:1}}>{label}</div>
                <select value={jogoForm[field]} onChange={e=>setJogoForm(p=>({...p,[field]:e.target.value}))}
                  style={{width:"100%",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:8,padding:"8px 10px",color:"#e8f0fe",fontSize:12,outline:"none"}}>
                  {opts.map(o=><option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8}}>
            {[["data","Data","date"],["horario","Horário","time"]].map(([f,l,t])=>(
              <div key={f}>
                <div style={{fontSize:9,color:"#64748b",marginBottom:3,textTransform:"uppercase",letterSpacing:1}}>{l}</div>
                <input type={t} value={jogoForm[f]} onChange={e=>setJogoForm(p=>({...p,[f]:e.target.value}))}
                  style={{width:"100%",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:8,padding:"8px 10px",color:"#e8f0fe",fontSize:12,outline:"none",boxSizing:"border-box"}} />
              </div>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12}}>
            {[["adversario","Adversário"],["local","Local"]].map(([f,l])=>(
              <div key={f}>
                <div style={{fontSize:9,color:"#64748b",marginBottom:3,textTransform:"uppercase",letterSpacing:1}}>{l}</div>
                <input value={jogoForm[f]} onChange={e=>setJogoForm(p=>({...p,[f]:e.target.value}))} placeholder={l}
                  style={{width:"100%",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:8,padding:"8px 10px",color:"#e8f0fe",fontSize:12,outline:"none",boxSizing:"border-box"}} />
              </div>
            ))}
          </div>

          {/* PLACAR LIVE */}
          <div style={{background:"rgba(34,197,94,0.08)",border:"1px solid rgba(34,197,94,0.2)",borderRadius:12,padding:"12px 16px",marginBottom:14,textAlign:"center"}}>
            <div style={{fontSize:10,color:"#64748b",marginBottom:6,textTransform:"uppercase",letterSpacing:1}}>Placar ao Vivo</div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:16}}>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:10,color:"#94a3b8",marginBottom:2}}>City Park F.C</div>
                <div style={{fontSize:36,fontWeight:900,color:"#22c55e"}}>{golsCityForm}</div>
              </div>
              <div style={{fontSize:24,color:"#64748b",fontWeight:300}}>×</div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:10,color:"#94a3b8",marginBottom:2}}>{jogoForm.adversario||"Adversário"}</div>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <button onClick={()=>setJogoForm(p=>({...p,golsAdv:Math.max(0,(parseInt(p.golsAdv)||0)-1)}))} style={{width:26,height:26,borderRadius:"50%",border:"1px solid rgba(239,68,68,0.4)",background:"rgba(239,68,68,0.1)",color:"#ef4444",fontSize:14,cursor:"pointer",fontWeight:900,lineHeight:"1"}}>−</button>
                  <div style={{fontSize:36,fontWeight:900,color:"#ef4444",minWidth:32,textAlign:"center"}}>{parseInt(jogoForm.golsAdv)||0}</div>
                  <button onClick={()=>setJogoForm(p=>({...p,golsAdv:(parseInt(p.golsAdv)||0)+1}))} style={{width:26,height:26,borderRadius:"50%",border:"1px solid rgba(239,68,68,0.4)",background:"rgba(239,68,68,0.1)",color:"#ef4444",fontSize:14,cursor:"pointer",fontWeight:900,lineHeight:"1"}}>+</button>
                </div>
              </div>
            </div>
            <div style={{marginTop:8,fontSize:13,fontWeight:800,color: golsCityForm>golsAdvForm?"#22c55e":golsCityForm===golsAdvForm?"#fbbf24":"#ef4444"}}>
              {golsCityForm>golsAdvForm?"🏆 Vitória":golsCityForm===golsAdvForm?"🤝 Empate":"💔 Derrota"}
            </div>
          </div>

          {/* JOGADORES DO JOGO */}
          <div style={{fontSize:10,color:"#64748b",marginBottom:8,textTransform:"uppercase",letterSpacing:1}}>Jogadores & Estatísticas</div>
          <div style={{display:"flex",flexDirection:"column",gap:6,maxHeight:300,overflowY:"auto",paddingRight:4}}>
            {(jogoForm.jogadores||[]).map((jj,idx)=>(
              <div key={jj.nome} style={{background:"rgba(255,255,255,0.04)",borderRadius:9,padding:"8px 12px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                <div style={{fontSize:12,fontWeight:700,color:"#e2e8f0",minWidth:80,flex:1}}>{jj.nome}</div>
                {[
                  {f:"gols",icon:"⚽",c:"#22c55e",label:"Gols"},
                  {f:"amarelo",icon:"🟡",c:"#fbbf24",label:"Amarelo"},
                  {f:"azul",icon:"🔵",c:"#3b82f6",label:"Azul"},
                  {f:"vermelho",icon:"🔴",c:"#ef4444",label:"Vermelho"},
                ].map(({f,icon,c,label})=>(
                  <div key={f} style={{display:"flex",alignItems:"center",gap:3,fontSize:10}}>
                    <span title={label}>{icon}</span>
                    <input type="number" min="0" max="99" value={jj[f]||0}
                      onChange={e=>setJogoJogador(idx,f,Math.max(0,parseInt(e.target.value)||0))}
                      style={{width:36,background:"rgba(255,255,255,0.07)",border:`1px solid ${c}44`,borderRadius:6,padding:"3px 5px",color:c,fontSize:11,outline:"none",textAlign:"center",fontWeight:800}} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{display:"flex",gap:8,marginTop:14}}>
            <button onClick={()=>{setJogoPop(null);setJogoForm(null);}} style={{flex:1,padding:"10px",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"#64748b",fontSize:13,cursor:"pointer"}}>Cancelar</button>
            <button onClick={salvarJogo} style={{flex:2,padding:"10px",borderRadius:10,border:"none",background:"linear-gradient(135deg,#22c55e,#16a34a)",color:"#fff",fontSize:13,fontWeight:800,cursor:"pointer"}}>💾 Salvar Jogo</button>
          </div>
        </div>
      </div>
    );
  };

  // ── CARD STAT ─────────────────────────────────────────────────────────────
  const StatCard = ({icon,label,v,c="#e2e8f0",small=false}) => (
    <div style={{background:"rgba(255,255,255,0.04)",borderRadius:10,padding:small?"8px 6px":"10px 8px",textAlign:"center",border:`1px solid ${c}22`}}>
      <div style={{fontSize:small?13:16}}>{icon}</div>
      <div style={{fontSize:small?7:8,color:"#475569",textTransform:"uppercase",letterSpacing:0.5,fontWeight:700,marginTop:1}}>{label}</div>
      <div style={{fontSize:small?11:13,fontWeight:900,color:c,marginTop:1}}>{v}</div>
    </div>
  );

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#071428 0%,#0d2040 60%,#071428 100%)",fontFamily:"'Trebuchet MS','Segoe UI',sans-serif",color:"#e8f0fe"}}>
      <StatusModal />
      <JogoModal />
      <div style={{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",backgroundImage:"radial-gradient(circle at 20% 30%,rgba(0,180,100,0.06) 0%,transparent 50%),radial-gradient(circle at 80% 70%,rgba(0,100,220,0.06) 0%,transparent 50%)"}} />
      <div style={{position:"relative",zIndex:1,maxWidth:720,margin:"0 auto",padding:"18px 14px 48px"}}>

        {/* HEADER */}
        <div style={{textAlign:"center",marginBottom:18}}>
          <img src={LOGO} alt="City Park FC"
            style={{width:84,height:84,objectFit:"contain",borderRadius:8,marginBottom:6,filter:"drop-shadow(0 4px 16px rgba(34,197,94,0.3))"}} />
          <h1 style={{fontSize:21,fontWeight:900,letterSpacing:2,margin:0,textTransform:"uppercase",
            background:"linear-gradient(90deg,#22c55e,#4ade80,#22c55e)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>City Park F.C</h1>
          <p style={{color:"#475569",fontSize:10,marginTop:2,letterSpacing:1}}>MARABÁ – PARÁ • GESTÃO {ANO}</p>
        </div>

        {/* TABS */}
        <div style={{display:"flex",gap:6,marginBottom:14}}>
          {[["mensalidades","💰"],["lancamentos","📊"],["jogos","⚽"],["jogadores","👥"]].map(([id,icon])=>(
            <button key={id} onClick={()=>setTab(id)} style={{flex:1,padding:"9px 4px",borderRadius:10,border:"none",cursor:"pointer",fontSize:10,fontWeight:700,
              background:tab===id?"linear-gradient(135deg,#22c55e,#16a34a)":"rgba(255,255,255,0.06)",
              color:tab===id?"#fff":"#64748b",transition:"all 0.2s"}}>
              {icon} {id.charAt(0).toUpperCase()+id.slice(1)}
            </button>
          ))}
        </div>

        {/* ═══ TAB MENSALIDADES ═══════════════════════════════════════════════ */}
        {tab==="mensalidades" && (<>
          {/* Seletor de mês */}
          <div style={{background:"rgba(255,255,255,0.04)",borderRadius:11,border:"1px solid rgba(255,255,255,0.07)",padding:"9px 13px",marginBottom:12}}>
            <div style={{fontSize:9,color:"#475569",fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:6}}>Mês de referência</div>
            <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
              {MESES.map((m,i)=>(
                <button key={i} onClick={()=>setSt(prev=>({...prev,mesAtivo:i}))} style={{
                  padding:"4px 9px",borderRadius:18,border:"none",cursor:"pointer",fontSize:10,fontWeight:700,
                  background:mesAtivo===i?"linear-gradient(135deg,#22c55e,#16a34a)":"rgba(255,255,255,0.06)",
                  color:mesAtivo===i?"#fff":"#64748b",transition:"all 0.2s"}}>{m}</button>
              ))}
            </div>
          </div>

          {/* Resumo financeiro */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8,marginBottom:10}}>
            {[{label:"Receitas",v:recMes,icon:"💚",c:"#22c55e"},{label:"Despesas",v:despMes,icon:"🔴",c:"#ef4444"},
              {label:"Saldo Mês",v:saldoMes,icon:saldoMes>=0?"📈":"📉",c:cor(saldoMes)},{label:"Acumulado",v:saldoAcumulado,icon:"🏦",c:cor(saldoAcumulado)}].map((c,i)=>(
              <div key={i} style={{background:"rgba(255,255,255,0.04)",borderRadius:10,border:`1px solid ${c.c}22`,padding:"9px 6px",textAlign:"center"}}>
                <div style={{fontSize:14,marginBottom:2}}>{c.icon}</div>
                <div style={{fontSize:8,color:"#475569",textTransform:"uppercase",letterSpacing:0.5,fontWeight:700}}>{c.label}</div>
                <div style={{fontSize:11,fontWeight:900,color:c.c,marginTop:1}}>{fmt(c.v)}</div>
              </div>
            ))}
          </div>

          {/* Saldo anterior */}
          <div style={{background:"rgba(255,255,255,0.03)",borderRadius:9,border:"1px solid rgba(255,255,255,0.05)",padding:"7px 13px",marginBottom:12,display:"flex",justifyContent:"space-between",fontSize:10}}>
            <span style={{color:"#64748b"}}>Saldo anterior (Dez/2025 + meses anteriores)</span>
            <span style={{fontWeight:800,color:cor(saldoAnterior)}}>{fmtS(saldoAnterior)}</span>
          </div>

          {/* Contagem status */}
          <div style={{marginBottom:8,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontSize:10,color:"#64748b",display:"flex",gap:8,flexWrap:"wrap"}}>
              <span style={{color:"#22c55e",fontWeight:700}}>{pagantes.length} pagos</span>
              {abonados.length>0&&<span style={{color:"#fbbf24",fontWeight:700}}>{abonados.length} abono médico</span>}
              {abonados2.length>0&&<span style={{color:"#a855f7",fontWeight:700}}>{abonados2.length} abono outro</span>}
              {inativos.length>0&&<span style={{color:"#94a3b8",fontWeight:700}}>{inativos.length} inativos</span>}
              <span style={{color:"#ef4444",fontWeight:700}}>{devedores.length} pendentes</span>
            </div>
            <div style={{fontSize:9,color:"#334155"}}>toque para alterar</div>
          </div>

          {/* Lista jogadores */}
          <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:14}}>
            {jogadores.map(nome=>{
              const p = getPag(nome,mesAtivo);
              const cfg = {
                pago:   {bg:"linear-gradient(135deg,rgba(34,197,94,0.13),rgba(22,163,74,0.06))", bdr:"rgba(34,197,94,0.35)",  ac:"#22c55e", icon:"✓",    sub:`Pago em ${p.data}`},
                abono:  {bg:"linear-gradient(135deg,rgba(251,191,36,0.1),rgba(234,179,8,0.05))",  bdr:"rgba(251,191,36,0.35)", ac:"#fbbf24", icon:"🏥",  sub:`Abono médico${p.data?" em "+p.data:""}`},
                abono2: {bg:"linear-gradient(135deg,rgba(168,85,247,0.1),rgba(147,51,234,0.05))", bdr:"rgba(168,85,247,0.35)", ac:"#a855f7", icon:"🤝",  sub:`Abono – outro motivo${p.data?" em "+p.data:""}`},
                inativo:{bg:"rgba(100,116,139,0.1)",  bdr:"rgba(100,116,139,0.25)", ac:"#94a3b8", icon:"😴",  sub:"Inativo este mês"},
                pendente:{bg:"rgba(255,255,255,0.04)", bdr:"rgba(255,255,255,0.07)", ac:"#475569", icon:nome.charAt(0).toUpperCase(), sub:"Pendente"},
              };
              const c = cfg[p.status]||cfg.pendente;
              return (
                <div key={nome} onClick={()=>setStatusPop(nome)} style={{background:c.bg,border:`1px solid ${c.bdr}`,borderRadius:10,padding:"10px 13px",
                  display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",userSelect:"none",transition:"all 0.2s"}}>
                  <div style={{display:"flex",alignItems:"center",gap:9}}>
                    <div style={{width:32,height:32,borderRadius:"50%",background:`${c.ac}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:900,color:c.ac}}>{c.icon}</div>
                    <div>
                      <div style={{fontWeight:700,fontSize:12,color:p.status!=="pendente"?"#e2e8f0":"#64748b"}}>{nome}</div>
                      <div style={{fontSize:9,color:c.ac,opacity:0.85}}>{c.sub}</div>
                    </div>
                  </div>
                  <div style={{fontWeight:900,fontSize:12,color:c.ac}}>
                    {p.status==="pago"?`R$ ${p.valor||MENSALIDADE},00`:p.status==="abono"?"Abono":p.status==="inativo"?"Inativo":"—"}
                  </div>
                </div>
              );
            })}
          </div>

          {/* WhatsApp */}
          <button onClick={()=>setShowWA(!showWA)} style={{width:"100%",padding:"12px",borderRadius:12,border:"none",cursor:"pointer",
            background:"linear-gradient(135deg,#25d366,#128c7e)",color:"#fff",fontSize:13,fontWeight:800,
            display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:showWA?10:0}}>
            📱 Gerar Mensagem para WhatsApp
          </button>
          {showWA&&(
            <div style={{background:"rgba(37,211,102,0.05)",border:"1px solid rgba(37,211,102,0.2)",borderRadius:12,padding:13}}>
              <pre style={{fontSize:10.5,lineHeight:1.7,color:"#94a3b8",whiteSpace:"pre-wrap",margin:0,marginBottom:10,fontFamily:"monospace"}}>{gerarWA()}</pre>
              <button onClick={copiar} style={{width:"100%",padding:"10px",borderRadius:9,border:"none",cursor:"pointer",
                background:copied?"linear-gradient(135deg,#22c55e,#16a34a)":"rgba(37,211,102,0.12)",
                color:copied?"#fff":"#22c55e",fontSize:12,fontWeight:800,transition:"all 0.3s"}}>
                {copied?"✓ Copiado! Cole no WhatsApp":"📋 Copiar Mensagem"}
              </button>
            </div>
          )}
        </>)}

        {/* ═══ TAB LANÇAMENTOS ════════════════════════════════════════════════ */}
        {tab==="lancamentos" && (<>
          <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:11,padding:13,marginBottom:14}}>
            <div style={{fontSize:9,fontWeight:700,color:"#64748b",textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>Novo Lançamento — {MESES_FULL[mesAtivo]}</div>
            <div style={{display:"flex",gap:6,marginBottom:7}}>
              {[["d","🔴 Despesa"],["r","💚 Receita"]].map(([t,l])=>(
                <button key={t} onClick={()=>setNovoTipo(t)} style={{flex:1,padding:"7px",borderRadius:8,border:"none",cursor:"pointer",fontSize:11,fontWeight:700,
                  background:novoTipo===t?(t==="r"?"rgba(34,197,94,0.25)":"rgba(239,68,68,0.25)"):"rgba(255,255,255,0.05)",
                  color:novoTipo===t?(t==="r"?"#22c55e":"#ef4444"):"#475569"}}>{l}</button>
              ))}
            </div>
            <input placeholder="Descrição" value={novaDesc} onChange={e=>setNovaDesc(e.target.value)}
              style={{width:"100%",marginBottom:7,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:"8px 11px",color:"#e8f0fe",fontSize:12,outline:"none",boxSizing:"border-box"}} />
            <div style={{display:"flex",gap:6,marginBottom:7}}>
              <input placeholder="Valor R$" type="number" value={novoValor} onChange={e=>setNovoValor(e.target.value)}
                style={{flex:1,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:"8px 11px",color:"#e8f0fe",fontSize:12,outline:"none"}} />
              <input placeholder="Data dd/mm" value={novaData} onChange={e=>setNovaData(e.target.value)}
                style={{flex:1,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:"8px 11px",color:"#e8f0fe",fontSize:12,outline:"none"}} />
            </div>
            <button onClick={addExtra} style={{width:"100%",padding:"9px",borderRadius:8,border:"none",cursor:"pointer",fontSize:12,fontWeight:800,
              background:novoTipo==="r"?"linear-gradient(135deg,#22c55e,#16a34a)":"linear-gradient(135deg,#ef4444,#dc2626)",color:"#fff"}}>
              + Adicionar {novoTipo==="r"?"Receita":"Despesa"}
            </button>
          </div>

          {extras.filter(e=>e.mes===mesAtivo).length>0&&(<>
            <div style={{fontSize:9,color:"#334155",marginBottom:5,textTransform:"uppercase",letterSpacing:1}}>Adicionados por você</div>
            <div style={{display:"flex",flexDirection:"column",gap:5,marginBottom:10}}>
              {extras.filter(e=>e.mes===mesAtivo).map(e=><LancRow key={e.id} item={e} confirmDel={confirmDel} setConfirmDel={setConfirmDel} onDel={delExtra} custom />)}
            </div>
          </>)}

          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7}}>
            <div style={{fontSize:9,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontWeight:700}}>
              {MESES_FULL[mesAtivo]} — {HISTORICO.filter(l=>l.mes===mesAtivo).length} históricos
            </div>
            <button onClick={()=>setShowHist(!showHist)} style={{padding:"3px 8px",borderRadius:6,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"#64748b",fontSize:9,cursor:"pointer"}}>
              {showHist?"Ocultar":"Ver todos"}
            </button>
          </div>
          {showHist&&(
            <div style={{display:"flex",flexDirection:"column",gap:5,marginBottom:10}}>
              {HISTORICO.filter(l=>l.mes===mesAtivo).length===0
                ? <div style={{textAlign:"center",color:"#334155",padding:"14px 0",fontSize:11}}>Sem lançamentos históricos neste mês</div>
                : HISTORICO.filter(l=>l.mes===mesAtivo).map(l=><LancRow key={l.id} item={l} />)}
            </div>
          )}

          <div style={{display:"flex",flexDirection:"column",gap:5,marginTop:6}}>
            {[{label: mesAtivo===0 ? "Saldo Dez/2025 (mês anterior)" : `Saldo acumulado até ${MESES[mesAtivo-1]}`,v:saldoAnterior},{label:`Receitas de ${MESES[mesAtivo]}`,v:recMes},{label:`Despesas de ${MESES[mesAtivo]}`,v:-despMes},
              {label:"Saldo do mês",v:saldoMes},{label:"Saldo acumulado",v:saldoAcumulado}].map((r,i)=>(
              <div key={i} style={{background:"rgba(255,255,255,0.04)",border:`1px solid ${cor(r.v)}22`,borderRadius:8,padding:"8px 12px",display:"flex",justifyContent:"space-between"}}>
                <span style={{fontSize:11,color:"#64748b"}}>{r.label}</span>
                <span style={{fontSize:12,fontWeight:900,color:cor(r.v)}}>{fmtS(r.v)}</span>
              </div>
            ))}
          </div>
        </>)}

        {/* ═══ TAB JOGOS ══════════════════════════════════════════════════════ */}
        {tab==="jogos" && (<>
          {/* DASHBOARD */}
          <div style={{background:"rgba(34,197,94,0.06)",border:"1px solid rgba(34,197,94,0.18)",borderRadius:14,padding:14,marginBottom:14}}>
            <div style={{fontSize:11,fontWeight:800,color:"#4ade80",marginBottom:10,textAlign:"center",letterSpacing:1,textTransform:"uppercase"}}>
              🏆 City Park F.C – Temporada {ANO}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:7,marginBottom:8}}>
              <StatCard icon="📅" label="Jogos" v={statsJogos.total} c="#e2e8f0"/>
              <StatCard icon="🏆" label="Vitórias" v={statsJogos.vitorias} c="#22c55e"/>
              <StatCard icon="🤝" label="Empates" v={statsJogos.empates} c="#fbbf24"/>
              <StatCard icon="💔" label="Derrotas" v={statsJogos.derrotas} c="#ef4444"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:7,marginBottom:8}}>
              <StatCard icon="⚽" label="Gols M" v={statsJogos.gm} c="#22c55e" small/>
              <StatCard icon="🥅" label="Gols S" v={statsJogos.gs} c="#ef4444" small/>
              <StatCard icon="⚖️" label="Saldo G" v={statsJogos.sg>0?"+"+statsJogos.sg:statsJogos.sg} c={cor(statsJogos.sg)} small/>
              <StatCard icon="📊" label="Aproveit." v={`${statsJogos.aproveitamento}%`} c={statsJogos.aproveitamento>=60?"#22c55e":statsJogos.aproveitamento>=40?"#fbbf24":"#ef4444"} small/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7}}>
              <StatCard icon="🟡" label="Amarelos" v={statsJogos.am} c="#fbbf24" small/>
              <StatCard icon="🔵" label="Azuis" v={statsJogos.az} c="#3b82f6" small/>
              <StatCard icon="🔴" label="Vermelhos" v={statsJogos.vm} c="#ef4444" small/>
            </div>
          </div>

          <button onClick={abrirNovoJogo} style={{width:"100%",padding:"12px",borderRadius:11,border:"none",cursor:"pointer",
            background:"linear-gradient(135deg,#22c55e,#16a34a)",color:"#fff",fontSize:13,fontWeight:800,marginBottom:14,
            display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
            ➕ Registrar Novo Jogo
          </button>

          {jogos.length===0&&<div style={{textAlign:"center",color:"#334155",padding:"30px 0",fontSize:13}}>Nenhum jogo registrado ainda</div>}

          <div style={{display:"flex",flexDirection:"column",gap:9}}>
            {[...jogos].reverse().map(j=>{
              const golsCity = (j.jogadores||[]).reduce((s,jj)=>s+(parseInt(jj.gols)||0),0);
              const golsAdv = parseInt(j.golsAdv)||0;
              const rCor = j.resultado==="V"?"#22c55e":j.resultado==="E"?"#fbbf24":"#ef4444";
              const rIcon = j.resultado==="V"?"🏆":j.resultado==="E"?"🤝":"💔";
              return (
                <div key={j.id} style={{background:"rgba(255,255,255,0.04)",border:`1px solid ${rCor}33`,borderRadius:12,padding:"12px 14px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                    <div>
                      <div style={{fontSize:11,color:"#64748b",marginBottom:2}}>{j.tipo} • {j.modalidade}{j.data?` • ${j.data.split("-").reverse().join("/")}`:""}{j.horario?` ${j.horario}`:""}</div>
                      <div style={{fontSize:13,fontWeight:700,color:"#e2e8f0"}}>City Park FC <span style={{color:rCor,fontWeight:900,fontSize:16}}>{golsCity} × {golsAdv}</span> {j.adversario||"Adversário"}</div>
                      {j.local&&<div style={{fontSize:10,color:"#475569",marginTop:2}}>📍 {j.local}</div>}
                    </div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5}}>
                      <span style={{fontSize:18}}>{rIcon}</span>
                      <div style={{display:"flex",gap:4}}>
                        <button onClick={()=>abrirEditarJogo(j)} style={{padding:"4px 8px",borderRadius:6,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.06)",color:"#94a3b8",fontSize:10,cursor:"pointer"}}>✏️</button>
                        <button onClick={()=>delJogo(j.id)} style={{padding:"4px 8px",borderRadius:6,border:"1px solid rgba(239,68,68,0.3)",background:"rgba(239,68,68,0.1)",color:"#ef4444",fontSize:10,cursor:"pointer"}}>🗑</button>
                      </div>
                    </div>
                  </div>
                  {/* Artilheiros e cartões */}
                  {(j.jogadores||[]).some(jj=>(parseInt(jj.gols)||0)+(parseInt(jj.amarelo)||0)+(parseInt(jj.azul)||0)+(parseInt(jj.vermelho)||0)>0)&&(
                    <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:8,display:"flex",flexWrap:"wrap",gap:6}}>
                      {(j.jogadores||[]).filter(jj=>(parseInt(jj.gols)||0)>0).map(jj=>(
                        <span key={jj.nome} style={{fontSize:10,color:"#22c55e",background:"rgba(34,197,94,0.1)",borderRadius:12,padding:"2px 8px"}}>⚽ {jj.nome} {jj.gols}</span>
                      ))}
                      {(j.jogadores||[]).filter(jj=>(parseInt(jj.amarelo)||0)>0).map(jj=>(
                        <span key={jj.nome+"am"} style={{fontSize:10,color:"#fbbf24",background:"rgba(251,191,36,0.1)",borderRadius:12,padding:"2px 8px"}}>🟡 {jj.nome}</span>
                      ))}
                      {(j.jogadores||[]).filter(jj=>(parseInt(jj.azul)||0)>0).map(jj=>(
                        <span key={jj.nome+"az"} style={{fontSize:10,color:"#3b82f6",background:"rgba(59,130,246,0.1)",borderRadius:12,padding:"2px 8px"}}>🔵 {jj.nome}</span>
                      ))}
                      {(j.jogadores||[]).filter(jj=>(parseInt(jj.vermelho)||0)>0).map(jj=>(
                        <span key={jj.nome+"vm"} style={{fontSize:10,color:"#ef4444",background:"rgba(239,68,68,0.1)",borderRadius:12,padding:"2px 8px"}}>🔴 {jj.nome}</span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>)}

        {/* ═══ TAB JOGADORES ══════════════════════════════════════════════════ */}
        {tab==="jogadores" && (<>
          <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:11,padding:13,marginBottom:13}}>
            <div style={{fontSize:9,fontWeight:700,color:"#64748b",textTransform:"uppercase",letterSpacing:1,marginBottom:7}}>Adicionar Jogador</div>
            <div style={{display:"flex",gap:7}}>
              <input placeholder="Nome do jogador" value={novoJog} onChange={e=>setNovoJog(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addJog()}
                style={{flex:1,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:"8px 11px",color:"#e8f0fe",fontSize:12,outline:"none"}} />
              <button onClick={addJog} style={{padding:"8px 14px",borderRadius:8,border:"none",cursor:"pointer",background:"linear-gradient(135deg,#22c55e,#16a34a)",color:"#fff",fontSize:15,fontWeight:900}}>+</button>
            </div>
          </div>

          <div style={{fontSize:9,color:"#334155",marginBottom:7,textTransform:"uppercase",letterSpacing:1}}>Elenco {ANO} — {jogadores.length} jogadores</div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {jogadores.map((nome,i)=>{
              const totalAno = MESES.reduce((s,_,m)=>s+(getPag(nome,m).status==="pago"?(getPag(nome,m).valor||MENSALIDADE):0),0);
              const mPagos = MESES.filter((_,m)=>getPag(nome,m).status==="pago").length;
              const mAbono = MESES.filter((_,m)=>["abono","abono2"].includes(getPag(nome,m).status)).length;
              const mInativo = MESES.filter((_,m)=>getPag(nome,m).status==="inativo").length;
              const sj = statsJogador(nome);
              return (
                <div key={nome} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:11,padding:"11px 13px"}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
                    <div style={{display:"flex",alignItems:"center",gap:9}}>
                      <div style={{width:32,height:32,borderRadius:"50%",background:"rgba(34,197,94,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:900,color:"#22c55e"}}>{i+1}</div>
                      <div>
                        <div style={{fontSize:13,fontWeight:800,color:"#e2e8f0"}}>{nome}</div>
                        <div style={{fontSize:9,color:"#475569"}}>
                          {mPagos}✅{mAbono>0?` · ${mAbono}🏥`:""}{mInativo>0?` · ${mInativo}😴`:""} em {ANO}
                        </div>
                      </div>
                    </div>
                    <div style={{textAlign:"right"}}>
                      <div style={{fontSize:13,fontWeight:900,color:"#22c55e"}}>{fmt(totalAno)}</div>
                      <div style={{fontSize:8,color:"#334155"}}>mensalidades</div>
                    </div>
                  </div>
                  {/* Stats de jogo */}
                  <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:5,borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:8}}>
                    {[{icon:"🏟️",label:"Jogos",v:sj.partidas,c:"#e2e8f0"},{icon:"⚽",label:"Gols",v:sj.gols,c:"#22c55e"},
                      {icon:"🟡",label:"Amarelos",v:sj.amarelos,c:"#fbbf24"},{icon:"🔵",label:"Azuis",v:sj.azuis,c:"#3b82f6"},
                      {icon:"🔴",label:"Vermelhos",v:sj.vermelhos,c:"#ef4444"}].map(({icon,label,v,c})=>(
                      <div key={label} style={{textAlign:"center"}}>
                        <div style={{fontSize:12}}>{icon}</div>
                        <div style={{fontSize:15,fontWeight:900,color:c}}>{v}</div>
                        <div style={{fontSize:7,color:"#475569",textTransform:"uppercase",letterSpacing:0.3}}>{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </>)}

        <div style={{textAlign:"center",marginTop:26,fontSize:8,color:"#1e293b",letterSpacing:1}}>CITY PARK F.C • MARABÁ-PA • {ANO}</div>
      </div>
    </div>
  );
}


// Inicializa o app
const _root = ReactDOM.createRoot(document.getElementById('root'));
_root.render(React.createElement(App));
