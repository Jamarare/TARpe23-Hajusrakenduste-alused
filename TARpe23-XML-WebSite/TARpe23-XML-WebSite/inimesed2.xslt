<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:output encoding="UTF-8" method="text" />
	<xsl:template match="/">
		Kolme esimese inimese perekonnanimi koos sooga:
		<xsl:for-each select="/inimesed/inimene[position() &lt;= 3]">
			<xsl:value-of select="perenimi" /> (<xsl:value-of select="sugu" />)
			<xsl:if test="position() != 3">, </xsl:if>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
