<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:output encoding="UTF-8" method="text" />
	<xsl:template match="/">
		<xsl:for-each select="/autod/auto">
			Perenimi: <xsl:value-of select="perenimi"/> →
			esimene: <xsl:value-of select="substring(perenimi,1,1)"/>,
			viimane: <xsl:value-of select="substring(perenimi,string-length(perenimi),1)"/>
			<xsl:text>&#10;</xsl:text>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
