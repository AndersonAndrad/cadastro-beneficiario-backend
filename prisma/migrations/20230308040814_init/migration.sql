-- CreateEnum
CREATE TYPE "SituacaoEnum" AS ENUM ('ATIVO', 'INATIVO');

-- CreateEnum
CREATE TYPE "ModalidadeEnum" AS ENUM ('COPARTICIPACAO', 'MENSALIDADE');

-- CreateTable
CREATE TABLE "Titular" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "situacao" "SituacaoEnum" NOT NULL,
    "modalidade" "ModalidadeEnum" NOT NULL,
    "adesao" TIMESTAMP(3) NOT NULL,
    "cancelamento" TIMESTAMP(3) NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Titular_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dependente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "situacao" "SituacaoEnum" NOT NULL,
    "modalidade" "ModalidadeEnum" NOT NULL,
    "adesao" TIMESTAMP(3) NOT NULL,
    "cancelamento" TIMESTAMP(3),
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "titularId" TEXT NOT NULL,

    CONSTRAINT "Dependente_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Dependente" ADD CONSTRAINT "Dependente_titularId_fkey" FOREIGN KEY ("titularId") REFERENCES "Titular"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
