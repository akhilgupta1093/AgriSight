-- CreateTable
CREATE TABLE "advisory" (
    "id" SERIAL NOT NULL,
    "recommendationType" TEXT NOT NULL,
    "fieldId" BIGINT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "advisory_pkey" PRIMARY KEY ("id")
);
