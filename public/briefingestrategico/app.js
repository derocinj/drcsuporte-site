/* Briefing estratégico NV × DRC — funciona inteiramente no navegador. */
'use strict';
const STORAGE_KEY = 'nv-drc-briefing-v1';
const SECTIONS = [
  {n:'01', title:'Sobre a DRC Suporte', nav:'Empresa e posicionamento', desc:'Entender a história, estrutura e ambição da empresa.', questions:[
    {id:1,title:'Como surgiu a DRC Suporte?',hint:'Conte brevemente a história da empresa, há quanto tempo atua no mercado e como começou.'},
    {id:2,title:'Atualmente, como a DRC está estruturada?',hint:'Quantas pessoas trabalham na empresa e quais são suas principais funções?'},
    {id:3,title:'Qual é o principal diferencial da DRC em relação às outras empresas de informática de Ji-Paraná?',hint:'O que vocês acreditam fazer especialmente bem? O que os clientes mais elogiam?'},
    {id:4,title:'Como vocês gostariam que a DRC fosse reconhecida na cidade?',hint:'Exemplos: referência em informática empresarial; especialista em computadores de alto desempenho; assistência técnica de confiança; soluções completas.'}
  ]},
  {n:'02',title:'Serviços e prioridades comerciais',nav:'Serviços e prioridades',desc:'Descobrir o que a DRC oferece e o que deve ganhar destaque.',questions:[
    {id:5,title:'Quais serviços a DRC oferece atualmente?',hint:'Marquem somente os serviços efetivamente prestados pela empresa.',choices:['Manutenção de computadores e notebooks','Higienização e manutenção preventiva','Montagem de computadores personalizados','Computadores gamers e de alto desempenho','Upgrade de componentes e equipamentos','Formatação e instalação de sistemas','Recuperação de dados','Instalação e configuração de redes','Cabeamento estruturado','Montagem e organização de racks','Suporte técnico para empresas','Contratos de manutenção empresarial','Instalação de câmeras de segurança','Venda de peças e equipamentos','Outros (especificar no campo abaixo)']},
    {id:6,title:'Quais são os três serviços que vocês mais desejam divulgar e vender atualmente?',hint:'Organizem por ordem de prioridade e expliquem brevemente por quê.'},
    {id:7,title:'Quais serviços têm a maior procura? E quais apresentam o melhor retorno financeiro?',hint:'Diferenciem demanda e rentabilidade, se possível. Não é necessário informar valores exatos.'},
    {id:8,title:'Existe algum serviço novo que a DRC pretende lançar, ampliar ou fortalecer nos próximos meses?'},
    {id:9,title:'A DRC atende apenas na sua unidade ou também realiza atendimentos externos?',hint:'Informem as modalidades de atendimento e as cidades ou regiões atendidas.'}
  ]},
  {n:'03',title:'Clientes e mercado',nav:'Clientes e mercado',desc:'Identificar os segmentos que já compram e aqueles que queremos conquistar.',questions:[
    {id:10,title:'Quem são os principais clientes da DRC atualmente?',hint:'Podem marcar mais de uma opção.',choices:['Pessoas físicas','Empresas e comércios','Escritórios e profissionais liberais','Clínicas e consultórios','Gamers e criadores de conteúdo','Instituições e organizações','Outros (especificar no campo abaixo)']},
    {id:11,title:'Qual perfil de cliente vocês mais desejam conquistar daqui para frente?',hint:'Exemplos: empresários que precisam de suporte contínuo, pessoas que procuram manutenção ou clientes interessados em montagens personalizadas.'},
    {id:12,title:'Quais problemas levam os clientes a procurar a DRC com mais frequência?',hint:'Descrevam as principais dores, dificuldades e necessidades que vocês resolvem.'},
    {id:13,title:'Quais são as dúvidas ou objeções mais comuns antes de contratar um serviço?',hint:'Exemplos: preço, prazo, segurança dos dados, garantia, qualidade dos componentes ou confiança.'},
    {id:14,title:'Quais empresas vocês consideram concorrentes diretas em Ji-Paraná?',hint:'Se possível, informem os nomes ou perfis nas redes sociais.'}
  ]},
  {n:'04',title:'Autoridade e diferenciação',nav:'Autoridade e diferenciação',desc:'Mapear provas reais de qualidade, experiência e confiança.',questions:[
    {id:15,title:'O que vocês fazem para garantir a qualidade e a segurança dos serviços prestados?',hint:'Podem citar diagnóstico, testes, procedimentos, garantia e acompanhamento do cliente.'},
    {id:16,title:'A equipe possui certificações, formações, especializações ou experiências técnicas que merecem destaque?'},
    {id:17,title:'Quais trabalhos realizados pela DRC vocês consideram os mais importantes ou impressionantes?',hint:'Exemplos: projetos de redes empresariais, montagens especiais e soluções de problemas complexos.'},
    {id:18,title:'A DRC possui clientes, parceiros ou projetos que podem ser apresentados como cases de sucesso?',hint:'Há autorização para divulgar imagens, informações ou depoimentos dessas pessoas e empresas?'}
  ]},
  {n:'05',title:'Marca e comunicação',nav:'Marca e comunicação',desc:'Definir o estilo, os porta-vozes e os recursos disponíveis.',questions:[
    {id:19,title:'Como vocês desejam que a comunicação da DRC seja percebida?',hint:'Escolham até três características.',max:3,choices:['Profissional e técnica','Moderna e inovadora','Próxima e acessível','Descontraída e criativa','Sofisticada e especializada','Educativa e didática','Outras (especificar no campo abaixo)']},
    {id:20,title:'Existe alguma empresa ou perfil nas redes sociais cuja comunicação vocês admiram?',hint:'Pode ser de qualquer cidade ou segmento. Informem os perfis e o que gostam neles.'},
    {id:21,title:'Quais assuntos, tipos de conteúdo ou abordagens vocês não gostariam de utilizar na comunicação da DRC?'},
    {id:22,title:'Os responsáveis ou técnicos da empresa estão disponíveis para aparecer nos vídeos?',hint:'Quem poderia apresentar conteúdos, explicar soluções e participar das gravações?'},
    {id:23,title:'A DRC possui identidade visual definida e materiais disponíveis?',hint:'Informem se há logotipo em alta qualidade, fontes, cores, fotos, vídeos e registros de serviços.'}
  ]},
  {n:'06',title:'Marketing, vendas e resultados',nav:'Marketing, vendas e resultados',desc:'Relacionar a comunicação a objetivos comerciais e métricas.',questions:[
    {id:24,title:'Atualmente, como a maioria dos clientes conhece a DRC?',hint:'Podem marcar mais de uma origem.',choices:['Indicação de outros clientes','Instagram','Google','WhatsApp','Fachada / localização','Parcerias empresariais','Outros (especificar no campo abaixo)']},
    {id:25,title:'Como funciona o primeiro atendimento de um interessado?',hint:'O contato acontece por WhatsApp, ligação, visita ou outro canal? Quem responde, faz orçamentos e acompanha?'},
    {id:26,title:'A DRC já realizou campanhas, anúncios pagos ou ações de marketing com resultados?',hint:'O que funcionou? O que não funcionou?'},
    {id:27,title:'Qual é o principal resultado esperado do trabalho da NV Produções nos próximos 90 dias?',hint:'Escolham até duas prioridades.',max:2,choices:['Atrair mais clientes para manutenção','Conseguir novos clientes empresariais','Aumentar a procura por montagens personalizadas','Gerar mais pedidos de orçamento','Tornar a DRC mais conhecida em Ji-Paraná','Fortalecer a confiança e a autoridade da marca','Aumentar vendas de produtos e equipamentos','Outro (especificar no campo abaixo)']},
    {id:28,title:'Como vocês gostariam de avaliar o sucesso dessa parceria?',hint:'Exemplos: mais orçamentos, novos clientes, contratos fechados, faturamento ou reconhecimento. Se possível, informem o volume atual de atendimentos ou orçamentos mensais.'}
  ]},
  {n:'07',title:'Considerações finais',nav:'Considerações finais',desc:'Espaço para prioridades e informações que ainda não foram abordadas.',questions:[
    {id:29,title:'O que vocês acreditam que ainda falta na comunicação da DRC e gostariam de melhorar com a NV Produções?'},
    {id:30,title:'Existe alguma informação importante sobre a empresa, seus clientes ou objetivos que não abordamos neste briefing?'}
  ]}
];
const ALL_QUESTIONS = SECTIONS.flatMap(s=>s.questions);
const $=id=>document.getElementById(id);
const escapeHtml = s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const state={responsavel:'',answers:{},checks:{}};
function loadState(){try{const draft=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');if(typeof draft.responsavel==='string')state.responsavel=draft.responsavel;if(draft.answers&&typeof draft.answers==='object')state.answers=draft.answers;if(draft.checks&&typeof draft.checks==='object')state.checks=draft.checks;}catch(e){console.warn('Rascunho indisponível',e)}}
function persist(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch(e){console.warn('Armazenamento local indisponível',e)}}
function render(){
  $('sectionNav').innerHTML=SECTIONS.map(s=>`<a href="#sec${s.n}" id="nav${s.n}"><span class="nav-number">${s.n}</span><span>${escapeHtml(s.nav)}</span></a>`).join('');
  $('sections').innerHTML=SECTIONS.map(s=>`<section class="question-section" id="sec${s.n}"><div class="section-headline"><div class="section-index">${s.n}</div><div><h2 class="section-title">${escapeHtml(s.title)}</h2><p class="section-sub">${escapeHtml(s.desc)}</p></div></div>${s.questions.map(q=>`<div class="question" id="question${q.id}"><div class="question-top"><span class="q-number">${String(q.id).padStart(2,'0')}.</span><label class="q-label" ${!q.choices?`for="q${q.id}"`:''}>${escapeHtml(q.title)} <span aria-label="obrigatório" style="color:#b75068">*</span></label></div>${q.hint?`<p class="q-hint">${escapeHtml(q.hint)}</p>`:''}<div class="answer-wrap">${q.choices?`<div class="option-grid" role="group" aria-label="${escapeHtml(q.title)}">${q.choices.map((label,i)=>`<label class="option"><input type="checkbox" name="q${q.id}_opt" value="${i+1}" data-question="${q.id}" ${state.checks[q.id]?.includes(i+1)?'checked':''} ${q.max?`data-max="${q.max}"`:''}><span>${escapeHtml(label)}</span></label>`).join('')}</div>${q.max?`<p class="limit-info">Selecione até ${q.max} opções.</p>`:''}<label class="other-label" for="q${q.id}">Outros / informações adicionais (se aplicável):</label>`:''}<textarea id="q${q.id}" name="q${q.id}" ${q.choices?'class="other-input"':''} placeholder="${q.choices?'Especifique outras opções, se necessário':'Digite sua resposta aqui...'}">${escapeHtml(state.answers[q.id]||'')}</textarea><span class="error">Preencha esta resposta para continuar.</span></div></div>`).join('')}</section>`).join('');
  $('responsavel').value=state.responsavel;
  $('responsavel').addEventListener('input',e=>{state.responsavel=e.target.value;persist();updateProgress();$('responsavelError').textContent=''});
  $('sections').addEventListener('input',e=>{if(e.target.matches('textarea')){state.answers[Number(e.target.name.slice(1))]=e.target.value;persist();updateProgress();e.target.closest('.question').classList.remove('invalid')}});
  $('sections').addEventListener('change',e=>{if(e.target.matches('input[type=checkbox]')){const id=Number(e.target.dataset.question);const q=ALL_QUESTIONS.find(q=>q.id===id);const checked=[...document.querySelectorAll(`input[data-question="${id}"]:checked`)];if(q.max && checked.length>q.max){e.target.checked=false;showStatus(`A pergunta ${String(id).padStart(2,'0')} permite até ${q.max} opções.`,true);return}state.checks[id]=[...document.querySelectorAll(`input[data-question="${id}"]:checked`)].map(x=>Number(x.value));persist();updateProgress();e.target.closest('.question').classList.remove('invalid');showStatus('')}});
  $('clearBtn').addEventListener('click',()=>{if(confirm('Deseja apagar todas as respostas salvas neste navegador? Esta ação não pode ser desfeita.')){localStorage.removeItem(STORAGE_KEY);location.reload()}});
  $('briefingForm').addEventListener('submit',submitForm);
  updateProgress();
}
function answered(q){const text=String(state.answers[q.id]||'').trim();if(!q.choices)return Boolean(text);const checked=state.checks[q.id]||[];if(checked.includes(q.choices.length)&&!text)return false;return Boolean(checked.length||text)}
function updateProgress(){const done=ALL_QUESTIONS.filter(answered).length;$('answeredCount').textContent=done;$('finalCount').textContent=`${done} de 30 respostas`;$('progressPercent').textContent=`${Math.round(done/30*100)}%`;$('progressFill').style.width=`${done/30*100}%`;SECTIONS.forEach(s=>{const count=s.questions.filter(answered).length;const nav=$('nav'+s.n);nav.classList.toggle('nav-done',count===s.questions.length);nav.querySelector('.nav-number').textContent=count===s.questions.length?'✓':s.n})}
function showStatus(message,isError=false){const el=$('status');el.textContent=message;el.className=`status ${isError?'error':message?'success':''}`}
function validate(){let first=null;for(const q of ALL_QUESTIONS){const bad=!answered(q)||Boolean(q.choices && q.max && (state.checks[q.id]||[]).length>q.max);const node=$('question'+q.id);node.classList.toggle('invalid',bad);if(bad&&!first)first=node;}if(!state.responsavel.trim()){$('responsavelError').textContent='Informe o nome da pessoa responsável.';if(!first)first=$('responsavel')}if(first){first.scrollIntoView({behavior:'smooth',block:'center'});(first.querySelector('textarea')||first).focus({preventScroll:true});showStatus('Existem respostas pendentes. Confira os campos destacados.',true);return false;}return true}
function printable(str){return String(str||'').replace(/\r\n?/g,'\n').replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"').replace(/[\u2013\u2014]/g,'-').replace(/\u2022/g,'-').replace(/\u2026/g,'...').replace(/[^\u0009\u000A\u000D\u0020-\u007E\u00A0-\u00FF]/g,'?').trim()}
function measuredCapacity(id){const overrides={5:65,10:65,19:65,24:65,27:65,1:170,2:120,3:150,4:150,6:190,7:170,8:130,9:125,11:170,12:165,13:160,14:135,15:175,16:140,17:175,18:175,20:140,21:140,22:140,23:140,25:165,26:145,28:180,29:220,30:220};return Math.min(92,overrides[id]||92)}
function textWrap(text,font,size,maxWidth){const result=[];for(const paragraph of String(text).split('\n')){if(!paragraph.trim()){result.push('');continue;}let line='';for(let word of paragraph.split(/\s+/)){if(!word)continue;let trial=line?line+' '+word:word;if(font.widthOfTextAtSize(trial,size)<=maxWidth){line=trial;continue}if(line){result.push(line);line=''}while(word&&font.widthOfTextAtSize(word,size)>maxWidth){let split=1;while(split<word.length&&font.widthOfTextAtSize(word.slice(0,split+1),size)<=maxWidth)split++;result.push(word.slice(0,split));word=word.slice(split)}line=word;}result.push(line);}return result}
async function generatePdf(){
  if(!window.PDFLib)throw new Error('Biblioteca de PDF não carregou. Verifique sua conexão com a internet e tente novamente.');
  const response=await fetch('./modelo.pdf',{cache:'no-store'});if(!response.ok)throw new Error('Não foi possível acessar o PDF original no servidor.');
  const pdf=await PDFLib.PDFDocument.load(await response.arrayBuffer());const form=pdf.getForm();const font=await pdf.embedFont(PDFLib.StandardFonts.Helvetica);const bold=await pdf.embedFont(PDFLib.StandardFonts.HelveticaBold);
  form.getTextField('responsavel').setText(printable(state.responsavel).slice(0,98));
  const fullAnswers=[];
  for(const q of ALL_QUESTIONS){
    const text=printable(state.answers[q.id]||'');const limit=measuredCapacity(q.id);
    const inline=text.length>limit?'Resposta completa nas páginas complementares.':text;
    form.getTextField('q'+q.id).setText(inline);
    if(text.length>limit)fullAnswers.push({q,text});
    if(q.choices){for(let i=1;i<=q.choices.length;i++){const check=form.getCheckBox(`q${q.id}_opt${i}`);if((state.checks[q.id]||[]).includes(i))check.check();else check.uncheck();}}
  }
  form.updateFieldAppearances(font);form.flatten();
  if(fullAnswers.length)appendLongAnswers(pdf,fullAnswers,font,bold);
  const bytes=await pdf.save();const blob=new Blob([bytes],{type:'application/pdf'});const objectUrl=URL.createObjectURL(blob);const a=document.createElement('a');const safeName=printable(state.responsavel).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z0-9_-]+/g,'_').replace(/^_+|_+$/g,'').slice(0,45)||'Respondido';a.href=objectUrl;a.download=`Briefing_Estrategico_NV_DRC_${safeName}.pdf`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(objectUrl),45000);return fullAnswers.length;
}
function appendLongAnswers(pdf,fullAnswers,font,bold){
  const {rgb}=PDFLib;const W=595.28,H=841.89;let page,y;
  const ink=rgb(.08,.17,.28),navy=rgb(.045,.125,.225),teal=rgb(.13,.61,.68),grey=rgb(.42,.49,.56);
  function createPage(){page=pdf.addPage([W,H]);page.drawRectangle({x:0,y:H-95,width:W,height:95,color:navy});page.drawText('NV PRODUCOES  /  DRC SUPORTE',{x:47,y:H-37,font:bold,size:11,color:rgb(1,1,1)});page.drawText('RESPOSTAS COMPLEMENTARES',{x:47,y:H-64,font:bold,size:17,color:rgb(1,1,1)});page.drawLine({start:{x:47,y:53},end:{x:W-47,y:53},thickness:.7,color:rgb(.8,.85,.9)});page.drawText('BRIEFING ESTRATEGICO DE MARKETING  -  DOCUMENTO CONFIDENCIAL',{x:47,y:37,font,size:8,color:grey});y=H-125;}
  function ensure(need){if(!page||y-need<76)createPage()}
  createPage();page.drawText('Responsavel: '+printable(state.responsavel).slice(0,75),{x:47,y,font:bold,size:10,color:ink});y-=34;
  for(const {q,text} of fullAnswers){const question=`${String(q.id).padStart(2,'0')}. ${printable(q.title)}`;const lines=textWrap(question,bold,10,490);ensure(lines.length*15+34);for(const line of lines){page.drawText(line,{x:47,y,font:bold,size:10,color:teal});y-=15;}y-=7;for(const line of textWrap(text,font,10.4,490)){ensure(15);if(line)page.drawText(line,{x:47,y,font,size:10.4,color:ink});y-=14.6;}y-=24;}
}
async function submitForm(event){event.preventDefault();if(!validate())return;const btn=$('generateBtn');btn.disabled=true;const initial=btn.innerHTML;btn.textContent='Gerando PDF, por favor aguarde...';showStatus('Preparando as respostas no documento original...');try{const n=await generatePdf();showStatus(`PDF gerado! O download foi iniciado. ${n?'As respostas mais longas estão completas nas páginas complementares.':'Todas as respostas foram inseridas no documento original.'}`);}catch(e){console.error(e);showStatus(`Não foi possível gerar o PDF: ${e.message||e}`,true)}finally{btn.disabled=false;btn.innerHTML=initial}}
loadState();render();
