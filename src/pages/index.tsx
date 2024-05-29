
import { Header } from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowRightCircle, ArrowRightIcon, CheckCircle, CheckIcon, Clock, Computer, CreditCard, DollarSign, Menu, MenuSquare, Plug, Settings, User, UserRound, UsersRound } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";




export default function Home() {
  return (
    <>
      <Header />

      <div className="max-w-screen-xl w-full m-auto p-6">
        <div className="flex flex-col max-w-3xl m-auto w-full min-h-64 items-center justify-center gap-6 py-12">

          <div className="bg-red-50 px-4 py-2 rounded-lg">
            <p>Junte-se a nossos clientes parceiros em todo brasil. <strong>Restaurantes, bares e lanchonetes</strong></p>
          </div>

          <h2 className=" font-panel font-bold text-5xl text-center text-slate-900 leading-12">
            Somos a melhor forma de você <span className="text-red-600">enviar os pedidos do seu restaurante</span>
          </h2>

          <p className="text-center text-lg text-slate-600">Conectamos seu restaurante aos seus clientes com serviços de entrega personalizada. Somos a resposta para enviar seus pedidos de forma eficiente, rápida e confiável.</p>


          <Button className="p-6 font-medium text-md gap-4">
            Cadastre seu negócio

            <ArrowRightIcon size={20} />
          </Button>
        </div>
      </div>


      <div className="relative max-w-screen-xl w-full m-auto p-6">
        <div className="flex flex-row gap-8">


          <img src="/entregador.jpeg" alt="entregador" className="rounded-lg w-[700px]" />

          <div className="absolute bg-red-600 top-12 text-white text-md p-4 rounded-sm">
            <p>Rede de entregadores em tempo real</p>
          </div>


          <div className="flex flex-col px-12">
            <h2 className="font-medium text-4xl text-slate-900 leading-11">
              Fature mais, sem taxas abusivas. <strong className="text-red-600">O dinheiro é seu.</strong>
            </h2>

            <div className="flex flex-row gap-4 items-center mt-8">
              <div className="bg-red-50 rounded-full p-4 text-red-600">
                <DollarSign />
              </div>
              <p className="text-lg">Pague um valor único e tenha acesso a todo o sistema</p>
            </div>

            <div className="flex flex-row gap-4 items-center mt-8">
              <div className="bg-red-50 rounded-full p-4 text-red-600">
                <UsersRound />
              </div>
              <p className="text-lg">Tenha acesso a nossa rede de entregadores em tempo real</p>
            </div>

            <div className="flex flex-row gap-4 items-center mt-8">
              <div className="bg-red-50 rounded-full p-4 text-red-600">
                <CreditCard />
              </div>
              <p className="text-lg">Pagamentos pela plataforma, cartões de crédito, débito e pix</p>
            </div>

            <p className="text-xl mt-12 leading-9">Receba os pedidos na sua tela e despache rapidamente com a nossa rede de entregas. <strong>
              Seus clientes podem acompanhar em tempo real
              os seus pedidos chegando em sua casa.</strong></p>

            <div className="mt-8">
              <Button size="lg" className="p-6 font-medium text-md">
                Quero ser um parceiro
              </Button>
            </div>
          </div>

        </div>
      </div>


      <div className="flex flex-col max-w-screen-xl w-full m-auto p-6 mt-8">



        <div className="flex flex-col items-center">

          <h2 className="font-panel font-bold max-w-xl text-center text-4xl text-slate-900 leading-11">
            <span className="text-red-600"> Entregas? </span>Somos muito mais do que isso
          </h2>
        </div>


        <div className="grid grid-cols-3 gap-4 mt-8">

          <Card className="shadow-none">
            <CardHeader className="gap-4">
              <div className="bg-red-50 w-24 rounded-full p-4 text-red-600">
                <MenuSquare />
              </div>
              <CardTitle>Cardápio Digital</CardTitle>
            </CardHeader>
            <CardContent className="leading-7">
              <p>Não dependa de plataformas de delivery, tenha seu próprio cardápio digital e que aceita pagamentos online com cartões de crédito, débito e pix.</p>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader className="gap-4">
              <div className="bg-red-50 w-24 rounded-full p-4 text-red-600">
                <UsersRound />
              </div>
              <CardTitle>Rede de entregadores</CardTitle>
            </CardHeader>
            <CardContent className="leading-7">
              <p>Tenha sua própria frota de entregadores ou utilize a nossa nuvem de entregadores em tempo real</p>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader className="gap-4">
              <div className="bg-red-50 w-24 rounded-full p-4 text-red-600">
                <Clock />
              </div>
              <CardTitle>Agendamento de entregas</CardTitle>
            </CardHeader>
            <CardContent className="leading-7">
              <p>Quer despachar vários pedidos de uma vez? Agrupe todos os pedidos em um mesmo horário e despache em uma única entrega.</p>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader className="gap-4">
              <div className="bg-red-50 w-24 rounded-full p-4 text-red-600">
                <User />
              </div>
              <CardTitle>CRM</CardTitle>
            </CardHeader>
            <CardContent className="leading-7">
              <p>Tenha acesso a base de dados de clientes, envie cupons, saiba quem são seus melhores compradores e quem não compra há algum tempo.</p>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader className="gap-4">
              <div className="bg-red-50 w-24 rounded-full p-4 text-red-600">
                <Computer />
              </div>
              <CardTitle>PDV</CardTitle>
            </CardHeader>
            <CardContent className="leading-7">
              <p>Receba os pedidos no seu painel de gestor e mande diretamente para a cozinha ou o bar. Distribua os pedidos entre seus entregadores e configure toda a sua loja em um único lugar.</p>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader className="gap-4">
              <div className="bg-red-50 w-24 rounded-full p-4 text-red-600">
                <Plug />
              </div>
              <CardTitle>Integrações</CardTitle>
            </CardHeader>
            <CardContent className="leading-7">
              <p>Integre seu delivery com os principais sistemas de gestão de pedidos atuais como Saipos, Ifood e outros.</p>
            </CardContent>
          </Card>

        </div>

        <div className="flex flex-col items-center mt-8">
          <Button size="lg" className="p-6 font-medium text-md">
            Quero conhecer o sistema
          </Button>
        </div>

      </div>



      <div className="flex flex-col max-w-screen-xl w-full m-auto p-6 mt-8">

        <div className="flex flex-col items-center">
          <h2 className="font-panel font-bold max-w-xl text-center text-4xl text-slate-900 leading-11">
            <span className="text-red-600"> Tudo para </span>para turbinar o seu delivery
          </h2>
        </div>

        <div className="grid grid-cols-normal gap-4 mt-8">

          <img src="/cardapio-digital.png" alt="" />

          <div className="p-12">
            <h2 className="font-medium text-3xl text-slate-900 leading-10">
              Um cardápio digital diferente, elegante e rápido. Seu cliente faz o pedido em 2 cliques.
            </h2>

            <p className="text-xl mt-6 leading-9">Troque a logotipo, coloque uma capa bonita, fotos em produtos, produtos em destaque, destaque promoções e muito mais. <strong>
              O nosso cardápio digital foi feito para ser rápido e eficiente.</strong></p>

            <div className="mt-6">
              <Button>
                Criar meu cardápio digital
              </Button>
            </div>
          </div>

        </div>

      </div>




      <div className="flex flex-col max-w-screen-xl w-full m-auto p-6 mt-8">


        <div className="grid grid-cols-normal gap-4 mt-8">

          <div className="p-12">
            <h2 className="font-medium text-3xl text-slate-900 leading-10">
              Integramos com os principais serviços de PDV e delivery do Brasil
            </h2>

            <p className="text-xl mt-6 leading-9">Não importa se você já tem um sistema próprio de PDV, integramos facilmente nossa aplicação ao seu sistema
              de forma rápida e eficiente. <strong>Nosso sistema de logistíca se adapta a qualquer cenário.</strong></p>

            <div className="mt-6">
              <Button>
                Criar meu cardápio digital
              </Button>
            </div>
          </div>

          <img src="/integracoes.png" alt="" />

        </div>

      </div>


      <div className="flex flex-col max-w-screen-xl w-full m-auto p-6 mt-8">

        <div className="flex flex-col items-center">
          <h2 className="font-panel font-bold max-w-xl text-center text-4xl text-slate-900 leading-11">
            <span className="text-red-600"> Escolha o plano que </span>caiba no seu bolso
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">

          <Card className="flex flex-col items-center py-6">
            <CardHeader className="flex flex-col items-center justify-center">
              <CardTitle className="text-2xl">Plano Starter</CardTitle>
              <CardDescription>Está começando? Que tal o Plano Starter?</CardDescription>
              <h2 className="text-xl font-bold">R$ 99,90 /mês</h2>
              <Button>
                Quero esse
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col w-full gap-4 px-12">
              <div className="flex flex-row gap-2">
                <p>Cardápio Digital personalizável com fotos, descrição e opcionais</p>
              </div>
              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>Rede de entregadores da Easy 24/7</p>
              </div>

              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>Pagamentos direto pelo cardápio digital</p>
              </div>

              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>CRM para gestão de clientes</p>
              </div>



            </CardContent>


          </Card>


          <Card className="flex flex-col items-center py-6">
            <CardHeader className="flex flex-col items-center justify-center">
              <CardTitle className="text-2xl">Plano Easy</CardTitle>
              <CardDescription className="text-center">O plano completo para quem já possui um restaurante e quer começar no delivery</CardDescription>
              <h2 className="text-xl font-bold">R$ 199,90 /mês</h2>
              <Button>
                Quero esse
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col w-full gap-4 px-12">
              <div className="flex flex-row gap-2">
                <p>Cardápio Digital personalizável com fotos, descrição e opcionais</p>
              </div>
              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>Rede de entregadores da Easy 24/7</p>
              </div>

              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>Pagamentos direto pelo cardápio digital</p>
              </div>

              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>Agrupamento de pedidos e otimizações de rotas</p>
              </div>

              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>CRM para gestão de clientes</p>
              </div>

              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>Integrações com PDV e Ifood</p>
              </div>

            </CardContent>

          </Card>


          <Card className="flex flex-col items-center py-6">
            <CardHeader className="flex flex-col items-center justify-center">
              <CardTitle className="text-2xl">Plano Platinum</CardTitle>
              <CardDescription className="text-center">O plano mais completo e com todas as funcionalidades da plataforma</CardDescription>
              <h2 className="text-xl font-bold">R$ 299,90 /mês</h2>
              <Button>
                Quero esse
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col w-full gap-4 px-12">
              <div className="flex flex-row gap-2">
                <p>Cardápio Digital personalizável com fotos, descrição e opcionais</p>
              </div>
              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>Rede de entregadores da Easy 24/7</p>
              </div>

              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>Pagamentos direto pelo cardápio digital</p>
              </div>

              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>Agrupamento de pedidos e otimizações de rotas</p>
              </div>

              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>CRM para gestão de clientes</p>
              </div>


              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>Integrações com PDV e Ifood</p>
              </div>


              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>Gestor de cozinha (KDS no tablet)</p>
              </div>

              <Separator orientation="horizontal" />
              <div className="flex flex-row gap-2">
                <p>Suporte prioritário</p>
              </div>

            </CardContent>

          </Card>

        </div>

      </div>

      <div className="bg-red-600">
        <div className="flex flex-col max-w-screen-xl w-full m-auto p-6 mt-8">
          <div className="grid grid-cols-3">

            <img src="/logo-footer.png" alt="" className="w-12"/>

          </div>
        </div>
      </div>






    </>
  )
}
