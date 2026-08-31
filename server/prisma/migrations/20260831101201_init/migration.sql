-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL,
    "warrantyExpiry" TIMESTAMP(3) NOT NULL,
    "warrantyPdf" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repair" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "repairDate" TIMESTAMP(3) NOT NULL,
    "issue" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "cost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Repair_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_serialNumber_key" ON "Product"("serialNumber");

-- CreateIndex
CREATE INDEX "Repair_productId_idx" ON "Repair"("productId");

-- AddForeignKey
ALTER TABLE "Repair" ADD CONSTRAINT "Repair_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
