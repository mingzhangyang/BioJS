const data = `LOCUS       NC_004431            5231428 bp    DNA     circular CON 25-AUG-2019
DEFINITION  Escherichia coli CFT073, complete genome.
ACCESSION   NC_004431 NZ_AE016755 NZ_AE016756 NZ_AE016757 NZ_AE016758
            NZ_AE016759 NZ_AE016760 NZ_AE016761 NZ_AE016762 NZ_AE016763
            NZ_AE016764 NZ_AE016765 NZ_AE016766 NZ_AE016767 NZ_AE016768
            NZ_AE016769 NZ_AE016770 NZ_AE016771 NZ_AE016772
VERSION     NC_004431.1
DBLINK      BioProject: PRJNA224116
            BioSample: SAMN02604094
            Assembly: GCF_000007445.1
KEYWORDS    RefSeq.
SOURCE      Escherichia coli CFT073
  ORGANISM  Escherichia coli CFT073
            Bacteria; Proteobacteria; Gammaproteobacteria; Enterobacterales;
            Enterobacteriaceae; Escherichia.
REFERENCE   1  (bases 1 to 5231428)
  AUTHORS   Welch,R.A., Burland,V., Plunkett,G. III, Redford,P., Roesch,P.,
            Rasko,D., Buckles,E.L., Liou,S.R., Boutin,A., Hackett,J.,
            Stroud,D., Mayhew,G.F., Rose,D.J., Zhou,S., Schwartz,D.C.,
            Perna,N.T., Mobley,H.L., Donnenberg,M.S. and Blattner,F.R.
  TITLE     Extensive mosaic structure revealed by the complete genome sequence
            of uropathogenic Escherichia coli
  JOURNAL   Proc. Natl. Acad. Sci. U.S.A. 99 (26), 17020-17024 (2002)
   PUBMED   12471157
REFERENCE   2  (bases 1 to 5231428)
  AUTHORS   Welch,R.A., Burland,V., Plunkett,G.D. III, Redford,P., Roesch,P.,
            Rasko,D.A., Buckles,E.L., Liou,S.-R., Boutin,A., Hackett,J.,
            Stroud,D., Mayhew,G.F., Rose,D.J., Zhou,S., Schwartz,D.C.,
            Perna,N.T., Mobley,H.L.T., Donnenberg,M.S. and Blattner,F.R.
  TITLE     Direct Submission
  JOURNAL   Submitted (20-JUN-2002) Genetics Laboratory, University of
            Wisconsin - Madison, 445 Henry Mall, Madison, WI 53706, USA
COMMENT     REFSEQ INFORMATION: The reference sequence was derived from
            AE014075.
            The annotation was added by the NCBI Prokaryotic Genome Annotation
            Pipeline (PGAP). Information about PGAP can be found here:
            https://www.ncbi.nlm.nih.gov/genome/annotation_prok/
            
            ##Genome-Annotation-Data-START##
            Annotation Provider               :: NCBI RefSeq
            Annotation Date                   :: 08/25/2019 15:33:21
            Annotation Pipeline               :: NCBI Prokaryotic Genome
                                                 Annotation Pipeline (PGAP)
            Annotation Method                 :: Best-placed reference protein
                                                 set; GeneMarkS-2+
            Annotation Software revision      :: 4.9
            Features Annotated                :: Gene; CDS; rRNA; tRNA; ncRNA;
                                                 repeat_region
            Genes (total)                     :: 5,169
            CDSs (total)                      :: 5,055
            Genes (coding)                    :: 4,784
            CDSs (with protein)               :: 4,784
            Genes (RNA)                       :: 114
            rRNAs                             :: 7, 7, 7 (5S, 16S, 23S)
            complete rRNAs                    :: 7, 7, 7 (5S, 16S, 23S)
            tRNAs                             :: 87
            ncRNAs                            :: 6
            Pseudo Genes (total)              :: 271
            CDSs (without protein)            :: 271
            Pseudo Genes (ambiguous residues) :: 0 of 271
            Pseudo Genes (frameshifted)       :: 167 of 271
            Pseudo Genes (incomplete)         :: 96 of 271
            Pseudo Genes (internal stop)      :: 45 of 271
            Pseudo Genes (multiple problems)  :: 34 of 271
            ##Genome-Annotation-Data-END##
            COMPLETENESS: full length.
FEATURES             Location/Qualifiers
     source          1..5231428
                     /organism="Escherichia coli CFT073"
                     /mol_type="genomic DNA"
                     /strain="CFT073"
                     /db_xref="taxon:199310"
     gene            190..255
                     /gene="thrL"
                     /locus_tag="C_RS00005"
                     /old_locus_tag="c5491"
     CDS             190..255
                     /gene="thrL"
                     /locus_tag="C_RS00005"
                     /old_locus_tag="c5491"
                     /inference="COORDINATES: similar to AA
                     sequence:RefSeq:NP_414542.1"
                     /note="Derived by automated computational analysis using
                     gene prediction method: Protein Homology."
                     /codon_start=1
                     /transl_table=11
                     /product="thr operon leader peptide"
                     /protein_id="WP_001386572.1"
                     /translation="MKRISTTITTTITITTGNGAG"
     misc_feature    191..310
                     /inference="COORDINATES: nucleotide
                     motif:Rfam:12.0:RF00506"
                     /inference="COORDINATES: profile:INFERNAL:1.1.1"
                     /note="Thr leader region; Derived by automated
                     computational analysis using gene prediction method:
                     cmsearch."
                     /db_xref="RFAM:RF00506"
     gene            453..911
                     /gene="tnpA"
                     /locus_tag="C_RS00010"
                     /old_locus_tag="c0002"
     CDS             453..911
                     /gene="tnpA"
                     /locus_tag="C_RS00010"
                     /old_locus_tag="c0002"
                     /inference="COORDINATES: similar to AA
                     sequence:RefSeq:NP_454994.1"
                     /note="Derived by automated computational analysis using
                     gene prediction method: Protein Homology."
                     /codon_start=1
                     /transl_table=11
                     /product="IS200/IS605 family transposase"
                     /protein_id="WP_000526115.1"
                     /translation="MGNEKSLAHTRWNCKYHIVFAPKYRRQVFYREKRRAIGCILRKL
                     CEWKSVRILEAECCADHIHMLVEIPPKMSVSGFMGYLKGKSSLMPYEQFGDLKFKYRN
                     REFWCRGYYVDTVGKNTAKIQDYIKHQLEEDKMGEQLSIPYPGSPFTGRK"
     gene            1048..3510
                     /gene="thrA"
                     /locus_tag="C_RS00015"
                     /old_locus_tag="c0003"
     CDS             1048..3510
                     /gene="thrA"
                     /locus_tag="C_RS00015"
                     /old_locus_tag="c0003"
                     /EC_number="1.1.1.3"
                     /EC_number="2.7.2.4"
                     /inference="COORDINATES: similar to AA
                     sequence:RefSeq:WP_005124053.1"
                     /note="Derived by automated computational analysis using
                     gene prediction method: Protein Homology."
                     /codon_start=1
                     /transl_table=11
                     /product="bifunctional aspartate kinase/homoserine
                     dehydrogenase I"
                     /protein_id="WP_001264710.1"
                     /translation="MRVLKFGGTSVANAERFLRVADILESNARQGQVATVLSAPAKIT
                     NHLVAMIEKTISGQDALPNISDAERIFAELLTGLAAAQPGFPLAQLKTFVDQEFAQIK
                     HVLHGISLLGQCPDSINAALICRGEKMSIAIMAGVLEARGHNVTVIDPVEKLLAVGHY
                     LESTVDIAESTRRIAASRIPADHMVLMAGFTAGNEKGELVVLGRNGSDYSAAVLAACL
                     RADCCEIWTDVDGVYTCDPRQVPDARLLKSMSYQEAMELSYFGAKVLHPRTITPIAQF
                     QIPCLIKNTGNPQAPGTLIGASRDEDELPVKGISNLNNMAMFSVSGPGMKGMVGMAAR
                     VFAAMSRARISVVLITQSSSEYSISFCVPQSDCVRAERAMQEEFYLELKEGLLEPLAV
                     TERLAIISVVGDGMRTLRGISAKFFAALARANINIVAIAQGSSERSISVVVNNDDATT
                     GVRVTHQMLFNTDQVIEVFVIGVGGVGGALLEQLKRQQSWLKNKHIDLRVCGVANSKA
                     LLTNVHGLNLENWQEELAQAKEPFNLGRLIRLVKEYHLLNPVIVDCTSSQAVADQYAD
                     FLREGFHVVTPNKKANTSSMDYYHQLRYAAEKSRRKFLYDTNVGAGLPVIENLQNLLN
                     AGDELMKFSGILSGSLSYIFGKLDEGMSFSEATTLAREMGYTEPDPRDDLSGMDVARK
                     LLILARETGRELELADIEIEPVLPAEFNAEGDVAAFMANLSQLDNLFAARVAKARDEG
                     KVLRYVGNIDEDGVCRVKIAEVDSNDPLFKVKNGENALAFYSHYYQPLPLVLRGYGAG
                     NDVTAAGVFADLLRTLSWKLGV"
     gene            3512..4444
                     /gene="thrB"
                     /locus_tag="C_RS00020"
                     /old_locus_tag="c0004"
     CDS             3512..4444
                     /gene="thrB"
                     /locus_tag="C_RS00020"
                     /old_locus_tag="c0004"
                     /EC_number="2.7.1.39"
                     /inference="COORDINATES: similar to AA
                     sequence:RefSeq:NP_308030.1"
                     /note="Derived by automated computational analysis using
                     gene prediction method: Protein Homology."
                     /codon_start=1
                     /transl_table=11
                     /product="homoserine kinase"
                     /protein_id="WP_000241663.1"
                     /translation="MVKVYAPASSANMSVGFDVLGAAVTPVDGALLGDVVTVEAAETF
                     SLNNLGRFADKLPSEPRENIVYQCWERFCQELGKQIPVAMTLEKNMPIGSGLGSSACS
                     VVAALMAMNEHCGKPLNDTRLLALMGELEGRISGSIHYDNVAPCFLGGMQLMIEENDI
                     ISQQVPGFDEWLWVLAYPGIKVSTAEARAILPAQYRRQDCIAHGRHLAGFIHACYSRQ
                     PELAANLMKDVIAEPYRERLLPGFRQARQAVAEIGAVASGISGSGPTLFALCDKPDTA
                     QRVADWLGKNYLQNQEGFVHICRLDTAGARVLEN"
     gene            4445..5731
                     /gene="thrC"
                     /locus_tag="C_RS00025"
                     /old_locus_tag="c0005"
     CDS             4445..5731
                     /gene="thrC"
                     /locus_tag="C_RS00025"
                     /old_locus_tag="c0005"
                     /EC_number="4.2.3.1"
                     /inference="COORDINATES: similar to AA
                     sequence:RefSeq:NP_308031.1"
                     /note="Derived by automated computational analysis using
                     gene prediction method: Protein Homology."
                     /codon_start=1
                     /transl_table=11
                     /product="threonine synthase"
                     /protein_id="WP_000781042.1"
                     /translation="MKLYNLKDHNEQVSFAQAVTQGLGKNQGLFFPHDLPEFSLTEID
                     EMLKLDFVTRSAKILSAFIGDEIPQEILEERVRAAFAFPAPVANVESDVGCLELFHGP
                     TLAFKDFGGRFMAQILTHIAGDKPVTILTATSGDTGAAVAHAFYGLPNVKVVILYPRG
                     KISPLQEKLFCTLGGNIETVAIDGDFDACQALVKQAFDDEELKVALGLNSANSINISR
                     LLAQICYYFEAVAQLPQEARNQLVVSVPSGNFGDLTAGLLAKSLGLPVKRFIAATNVN
                     DTVPRFLHDGQWSPKATQATLSNAMDVSQPNNWPRVEELFRRKIWQLKELGYAAVDDE
                     TTQQTMRELKELGYTSEPHAAVAYRALRDQLNPGEYGLFLGTAHPAKFKESVEAILGE
                     TLDLPKELAERADLPLLSHNLPADFAALRKLMMNHQ"`;

export default data