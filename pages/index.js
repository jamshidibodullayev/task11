import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from "@/components/Layout";
import Main from "@/components/Main";
import Layaut2 from "@/components/Layaut2";
import {getEmployeeById, getEmployees, getProjectById, getProjects, getTeamById, getTeams} from "@/components/api";
import {useEffect} from "react";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Layaut2>
          <Main></Main>
      </Layaut2>

    </>
  )
}
